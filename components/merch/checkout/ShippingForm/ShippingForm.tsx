import { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDebounce } from 'use-debounce';

import commerce from 'lib/commerce';

import { useCheckoutState, useCheckoutDispatch } from 'context/checkout';

import { AddressFields } from '@/merch/checkout';
import { FormCheckbox as FormRadio, FormError } from '@/merch/form';
import { GetShippingOptionsResponse } from '@chec/commerce.js/features/checkout';

function ShippingForm() {
  const { id } = useCheckoutState();
  const { setShippingMethod } = useCheckoutDispatch();
  const [countries, setCountries] = useState<{ [name: string]: string }>();
  const [subdivisions, setSubdivisions] = useState<{
    [name: string]: string;
  }>();
  const [shippingOptions, setShippingOptions] = useState<
    GetShippingOptionsResponse | [] | null | undefined
  >([]);
  const methods = useFormContext();
  const { watch, setValue } = methods;

  const [watchCountry] = useDebounce(watch('shipping.country'), 600);
  const watchSubdivision = watch('shipping.region');

  useEffect(() => {
    fetchCountries(id);
  }, []);

  useEffect(() => {
    setValue('shipping.region', '');

    if (watchCountry) {
      fetchSubdivisions(id, watchCountry);
      fetchShippingOptions(id, watchCountry);
    }
  }, [watchCountry]);

  useEffect(() => {
    if (watchSubdivision) {
      fetchShippingOptions(id, watchCountry, watchSubdivision);
    }
  }, [watchSubdivision]);

  const fetchCountries = async checkoutId => {
    try {
      const { countries } = await commerce.services.localeListShippingCountries(
        checkoutId
      );

      setCountries(countries);
    } catch (err) {
      console.log('couldnt fetch countries');
    }
  };

  const fetchSubdivisions = async (checkoutId, countryCode) => {
    try {
      const {
        subdivisions,
      } = await commerce.services.localeListShippingSubdivisions(
        checkoutId,
        countryCode
      );

      setSubdivisions(subdivisions);
    } catch (err) {
      console.log('couldnt fetchSubdivisions');
    }
  };

  const fetchShippingOptions = async (checkoutId, country, region?) => {
    if (!checkoutId && !country) return;

    setValue('fulfillment.shipping_method', null);

    try {
      const shippingOptions = await commerce.checkout.getShippingOptions(
        checkoutId,
        {
          country,
          ...(region && { region }),
        }
      );

      setShippingOptions(shippingOptions);

      if (shippingOptions.length === 1) {
        const [shippingOption] = shippingOptions;

        setValue('fulfillment.shipping_method', shippingOption.id);
        selectShippingMethod(shippingOption.id);
      }
    } catch (err) {
      console.log('couldnt fetchShippingOptions');
    }
  };

  const onShippingSelect = ({ target: { value } }) =>
    selectShippingMethod(value);

  const selectShippingMethod = async optionId => {
    try {
      await setShippingMethod(optionId, watchCountry, watchSubdivision);
    } catch (err) {
      console.log('couldnt selectShippingMethod');
    }
  };

  return (
    <div className='md:flex md:space-x-12 lg:space-x-24'>
      <div className='md:w-1/2'>
        <fieldset className='mb-3 md:mb-4'>
          <legend className='block py-3 text-lg font-medium text-black md:text-xl'>
            Shipping address
          </legend>

          <AddressFields
            prefix='shipping'
            countries={countries}
            subdivisions={subdivisions}
          />
        </fieldset>
      </div>
      <div className='md:w-1/2'>
        <fieldset className='mb-3 md:mb-4'>
          <legend className='block py-3 text-lg font-medium text-black md:text-xl'>
            Shipping
          </legend>
          <div>
            {watchCountry ? (
              <>
                <div className='-space-y-1'>
                  {shippingOptions.map(({ id, description, price }) => (
                    <div key={id}>
                      <FormRadio
                        id={id}
                        type='radio'
                        name='fulfillment.shipping_method'
                        value={id}
                        label={`${description}: ${price.formatted_with_symbol}`}
                        onChange={onShippingSelect}
                        required='You must select a shipping option'
                      />
                    </div>
                  ))}
                </div>

                <FormError name='fulfillment.shipping_method' />
              </>
            ) : (
              <p className='text-sm text-black'>
                Please enter your address to fetch shipping options
              </p>
            )}
          </div>
        </fieldset>
      </div>
    </div>
  );
}

export default ShippingForm;
