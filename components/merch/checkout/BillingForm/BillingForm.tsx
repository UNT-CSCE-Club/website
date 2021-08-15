import { useFormContext } from 'react-hook-form';
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';

import { useCheckoutState, useCheckoutDispatch } from 'context/checkout';

import { FormCheckbox, FormInput, FormError } from '@/merch/form';
import { AddressFields } from '@/merch/checkout';
import React from 'react';
import { Switch } from '@headlessui/react';
import { classNames } from 'lib/utils/classNames';

const style = {
  base: {
    '::placeholder': {
      color: 'rgba(21,7,3,0.3)',
    },
    color: '#150703',
    backgroundColor: '#FFFFFF',
    fontSize: '16px',
    fontFamily: `Nunito, Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
    iconColor: '#6B7280',
  },
};

function BillingForm({ isBillingSameAsShipping, setIsBillingSameAsShipping }) {
  const methods = useFormContext();
  const { collects } = useCheckoutState();
  const { setError } = useCheckoutDispatch();

  const { watch, setValue, clearErrors } = methods;

  const shipping = watch('shipping');

  const onStripeChange = () => {
    clearErrors('stripe');
    setError(null);
  };

  return (
    <div className='pt-10 mt-10 border-t border-gray-200'>
      <div className=''>
        <fieldset className='mb-3 md:mb-4'>
          <legend className='block py-3 text-lg font-medium text-black md:text-xl'>
            Billing information
          </legend>

          <Switch.Group as='div' className='flex items-center mb-4'>
            <Switch
              checked={isBillingSameAsShipping}
              onChange={setIsBillingSameAsShipping}
              className={classNames(
                isBillingSameAsShipping ? 'bg-primary' : 'bg-gray-200',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-light'
              )}
            >
              <span className='sr-only'>Use setting</span>
              <span
                className={classNames(
                  isBillingSameAsShipping ? 'translate-x-5' : 'translate-x-0',
                  'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                )}
              >
                <span
                  className={classNames(
                    isBillingSameAsShipping
                      ? 'opacity-0 ease-out duration-100'
                      : 'opacity-100 ease-in duration-200',
                    'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                  )}
                  aria-hidden='true'
                >
                  <svg
                    className='w-3 h-3 text-gray-400'
                    fill='none'
                    viewBox='0 0 12 12'
                  >
                    <path
                      d='M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2'
                      stroke='currentColor'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </span>
                <span
                  className={classNames(
                    isBillingSameAsShipping
                      ? 'opacity-100 ease-in duration-200'
                      : 'opacity-0 ease-out duration-100',
                    'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                  )}
                  aria-hidden='true'
                >
                  <svg
                    className='w-3 h-3 text-primary'
                    fill='currentColor'
                    viewBox='0 0 12 12'
                  >
                    <path d='M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z' />
                  </svg>
                </span>
              </span>
            </Switch>
            <Switch.Label as='span' className='ml-3'>
              <span className='text-sm font-medium text-gray-900'>
                Same as shipping information
              </span>
            </Switch.Label>
          </Switch.Group>

          {isBillingSameAsShipping ? null : <AddressFields prefix='billing' />}
        </fieldset>
      </div>

      <div className=''>
        <fieldset>
          <legend className='py-3 text-lg font-medium text-black md:text-xl'>
            Payment
          </legend>

          <div className='space-y-3'>
            <div>
              <label
                htmlFor='cardnumber'
                className='block text-sm font-medium text-gray-700'
              >
                Card number
              </label>
              <div className='mt-1'>
                <CardNumberElement
                  id='cardnumber'
                  options={{ style, placeholder: '' }}
                  className='w-full px-3 py-2.5 bg-white border border-gray-300 rounded-md appearance-none placeholder-faded-black focus:border-primary focus:outline-none'
                  onChange={onStripeChange}
                />
              </div>
            </div>

            <div className='flex space-x-4'>
              <div className='w-1/2'>
                <label
                  htmlFor='expiration'
                  className='block text-sm font-medium text-gray-700'
                >
                  Expiration date (MM/YY)
                </label>
                <div className='mt-1'>
                  <CardExpiryElement
                    id='expiration'
                    options={{ style, placeholder: '' }}
                    className='appearance-none bg-white placeholder-faded-black border border-gray-300 focus:border-primary focus:outline-none rounded-md w-full px-3 py-2.5'
                    onChange={onStripeChange}
                  />
                </div>
              </div>
              <div className='w-1/2'>
                <label
                  htmlFor='cvc'
                  className='block text-sm font-medium text-gray-700'
                >
                  CVC
                </label>
                <div className='mt-1'>
                  <CardCvcElement
                    id='cvc'
                    options={{ style, placeholder: '' }}
                    className='appearance-none bg-white placeholder-faded-black border border-gray-300 focus:border-primary focus:outline-none rounded-md w-full px-3 py-2.5'
                    onChange={onStripeChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <FormError name='stripe' />
        </fieldset>
      </div>
    </div>
  );
}

export default BillingForm;
