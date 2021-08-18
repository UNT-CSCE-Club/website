import React, { useState, useEffect } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import { useForm, FormProvider } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

import { useCartDispatch, useCartState } from 'context/cart';
import { useCheckoutState, useCheckoutDispatch } from 'context/checkout';
import { FormInput } from '@/merch/form';
import {
  BillingForm,
  CheckoutSummary,
  OrderSummary,
  ShippingForm,
  Success,
} from '@/merch/checkout';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { FiXCircle } from 'react-icons/fi';
import { ClubMembersSvg, LinearProgress } from 'components/ui';

function Checkout() {
  const [order, setOrder] = useState();
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);
  const { reset: resetCart } = useCartDispatch();
  const { currentStep, id, live, isCheckoutLoading } = useCheckoutState();
  const {
    generateToken,
    setCurrentStep,
    capture,
    setProcessing,
    setError: setCheckoutError,
  } = useCheckoutDispatch();
  const methods = useForm({
    shouldUnregister: false,
  });
  const { handleSubmit, setError, control } = methods;

  const stripe = useStripe();
  const elements = useElements();

  const { id: cartId, isCartLoading, total_unique_items } = useCartState();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isCartLoading && total_unique_items < 1 && !isCheckoutLoading) {
  //     router.push('/merch');
  //     toast('Your cart is empty', {
  //       icon: <FiXCircle className='flex-shrink-0 w-5 h-5 text-red-500' />,
  //     });
  //   }
  // }, [isCartLoading, total_unique_items, isCheckoutLoading, router]);

  // useEffect(() => {
  //   cartId && generateToken(cartId);
  // }, [cartId]);

  const captureOrder = async values => {
    setProcessing(true);

    const checkoutPayload = generateCheckoutPayload(values);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement('cardNumber'),
      billing_details: {
        name: `${checkoutPayload.billing.firstname} ${checkoutPayload.billing.lastname}`,
        email: checkoutPayload.customer.email,
      },
    });

    if (error) {
      setError('stripe', { type: 'manual', message: error.message });
      setProcessing(false);
      return;
    }

    try {
      const newOrder = await capture({
        ...checkoutPayload,
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      });

      handleOrderSuccess(newOrder);
      setProcessing(false);
    } catch (res) {
      if (
        res.statusCode !== 402 ||
        res.data.error.type !== 'requires_verification'
      ) {
        setCheckoutError(res.data.error.message);
        setProcessing(false);
        return;
      }

      const { error, paymentIntent } = await stripe.handleCardAction(
        res.data.error.param
      );

      if (error) {
        setError('stripe', { type: 'manual', message: error.message });
        setProcessing(false);
        return;
      }

      try {
        const newOrder = await capture({
          ...checkoutPayload,
          payment: {
            gateway: 'stripe',
            stripe: {
              payment_intent_id: paymentIntent.id,
            },
          },
        });

        handleOrderSuccess(newOrder);
        setProcessing(false);
      } catch (err) {
        setError('stripe', { type: 'manual', message: error.message });
        setProcessing(false);
      }
    }
  };

  const generateCheckoutPayload = values => {
    const { customer, shipping, billing, ...data } = values;

    if (isBillingSameAsShipping) {
      return {
        ...data,
        customer,
        shipping: {
          ...shipping,
          name: `${shipping.firstname} ${shipping.lastname}`,
        },
        billing: {
          ...shipping,
          name: `${shipping.firstname} ${shipping.lastname}`,
        },
      };
    } else {
      return {
        ...data,
        customer,
        shipping: {
          ...shipping,
          name: `${shipping.firstname} ${shipping.lastname}`,
        },
        billing: {
          ...billing,
          name: `${billing.firstname} ${billing.lastname}`,
          county_state: billing.region,
        },
      };
    }
  };

  const handleOrderSuccess = order => {
    setOrder(order);
    setCurrentStep('success');
    resetCart();
  };

  const onSubmit = values => captureOrder(values);

  if (isCartLoading || total_unique_items < 1 || isCheckoutLoading || !id)
    // if (true)
    return (
      <div className='flex items-center justify-center h-[calc(100vh-4rem)] my-container'>
        <div className='flex flex-col items-center justify-center w-full p-8 bg-white shadow-xl max-w-screen-xs md:max-w-screen-sm 2xl:max-w-screen-lg rounded-xl'>
          <p className='mb-8 text-2xl font-bold text-gray-900'>
            Preparing checkout
          </p>
          <ClubMembersSvg className='xl:max-w-sm 2xl:max-w-screen-md' />
        </div>
        {/* <LinearProgress /> */}
      </div>
    );

  return (
    <FormProvider {...methods}>
      <div className='pt-16 pb-24 my-container'>
        <div className='max-w-2xl mx-auto lg:max-w-none'>
          <h1 className='sr-only'>Checkout</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16'
          >
            <div>
              <fieldset className='mb-3 md:mb-4'>
                <legend className='block pb-3 text-lg font-medium text-black md:text-xl'>
                  Contact information
                </legend>

                <FormInput
                  label='First Name'
                  name='customer.firstname'
                  required
                />
                <FormInput
                  label='Last Name'
                  name='customer.lastname'
                  required
                />
                <FormInput
                  type='email'
                  label='Email address'
                  name='customer.email'
                  required
                  validation={{
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'You must enter a valid email',
                    },
                  }}
                />
              </fieldset>
              <ShippingForm />
              <BillingForm
                isBillingSameAsShipping={isBillingSameAsShipping}
                setIsBillingSameAsShipping={setIsBillingSameAsShipping}
              />
            </div>
            <CheckoutSummary {...live} />
            {currentStep === 'success' && (
              <>
                <Success {...order} />
                <OrderSummary {...order} />
              </>
            )}
          </form>
          <DevTool control={control} placement='top-right' />
        </div>
      </div>
    </FormProvider>
  );
}

export default Checkout;
