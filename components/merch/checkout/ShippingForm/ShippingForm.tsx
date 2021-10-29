import React, { useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import commerce from 'lib/commerce';

import { useCheckoutState, useCheckoutDispatch } from 'context/checkout';

import { AddressFields } from '@/merch/checkout';
import { FormError } from '@/merch/form';
import { RadioGroup } from '@headlessui/react';
import { classNames } from 'lib/utils/classNames';
import { CheckCircleIcon } from '@heroicons/react/solid';
import { GetShippingOptionsResponse } from '@chec/commerce.js/features/checkout';

function ShippingForm() {
  const { id } = useCheckoutState();
  const { setShippingMethod, setTax } = useCheckoutDispatch();
  const [shippingOptions, setShippingOptions] = useState<any>([]);
  const methods = useFormContext();
  const { watch, setValue, control, setError, clearErrors } = methods;

  const watchSubdivision = watch('shipping.county_state');
  const watchZipCode = watch('shipping.postal_zip_code');

  useEffect(() => {
    if (!watchSubdivision) {
      fetchShippingOptions(id, 'US');
    }
    if (watchSubdivision) {
      fetchShippingOptions(id, 'US', watchSubdivision);
    }
  }, [watchSubdivision]);

  useEffect(() => {
    if (watchSubdivision && watchZipCode.length === 5) {
      setTax(watchSubdivision, watchZipCode, setError, clearErrors);
    }
  }, [watchSubdivision, watchZipCode]);

  const fetchShippingOptions = async (checkoutId, country, region?) => {
    if (!checkoutId && !country) return;

    setValue('fulfillment.shipping_method', null);

    try {
      const shippingMethods = (await commerce.checkout.getShippingOptions(
        checkoutId,
        {
          country,
          ...(region && { region }),
        }
      )) as unknown as GetShippingOptionsResponse[]; // fix @types/chec__commerce.js incorrect return type

      setShippingOptions(shippingMethods);

      if (shippingMethods.length === 1) {
        const [shippingOption] = shippingMethods;

        setValue('fulfillment.shipping_method', shippingOption.id);
        selectShippingMethod(shippingOption.id);
      }
    } catch (err) {
      console.log('couldnt fetchShippingOptions');
    }
  };

  const selectShippingMethod = async optionId => {
    try {
      await setShippingMethod(optionId, 'US', watchSubdivision);
    } catch (err) {
      console.log('couldnt selectShippingMethod');
    }
  };

  return (
    <div className='pt-10 mt-10 border-t border-gray-200'>
      <div className=''>
        <fieldset className='mb-3 md:mb-4'>
          <legend className='block py-3 text-lg font-medium text-black md:text-xl'>
            Shipping information
          </legend>

          <AddressFields prefix='shipping' />
        </fieldset>
      </div>
      <div className='pt-10 mt-10 border-t border-gray-200'>
        <div>
          <Controller
            control={control}
            defaultValue=''
            name='fulfillment.shipping_method'
            rules={{ required: 'You must select a shipping option' }}
            render={({ field: { onChange, value } }) => (
              <RadioGroup
                value={value}
                onChange={value => {
                  onChange(value);
                  selectShippingMethod(value);
                }}
              >
                <RadioGroup.Label className='text-xl font-medium text-gray-900'>
                  Delivery method
                </RadioGroup.Label>

                <div className='grid grid-cols-1 mt-4 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                  {shippingOptions.map(({ id, description, price }) => (
                    <RadioGroup.Option
                      key={id}
                      value={id}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? 'border-transparent' : 'border-gray-300',
                          active ? 'ring-2 ring-primary-light' : '',
                          'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <div className='flex flex-1'>
                            <div className='flex flex-col'>
                              <RadioGroup.Label
                                as='span'
                                className='block text-sm font-medium text-gray-900'
                              >
                                {description}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as='span'
                                className='mt-6 text-sm font-medium text-gray-900'
                              >
                                {price.formatted_with_symbol}
                              </RadioGroup.Description>
                            </div>
                          </div>
                          {checked ? (
                            <CheckCircleIcon
                              className='w-5 h-5 ml-1 text-primary'
                              aria-hidden='true'
                            />
                          ) : null}
                          <div
                            className={classNames(
                              active ? 'border' : 'border-2',
                              checked
                                ? 'border-primary-light'
                                : 'border-transparent',
                              'absolute -inset-px rounded-lg pointer-events-none'
                            )}
                            aria-hidden='true'
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            )}
          />

          <FormError name='fulfillment.shipping_method' />
        </div>
      </div>
    </div>
  );
}

export default ShippingForm;
