import React from 'react';

import { FormInput, FormSelect } from '@/merch/form';
import { useCheckoutState } from 'context/checkout';

function AddressFields({ prefix = '' }) {
  const { unitedStatesSubdivisions } = useCheckoutState();

  return (
    <React.Fragment>
      <div className='md:flex md:items-start md:space-x-4'>
        <div className='md:w-1/2'>
          <FormInput label='First name' name={`${prefix}.firstname`} required />
        </div>
        <div className='md:w-1/2'>
          <FormInput label='Last name' name={`${prefix}.lastname`} required />
        </div>
      </div>

      <FormInput label='Address' name={`${prefix}.street`} required />
      <FormInput label='Town / City' name={`${prefix}.town_city`} required />

      <div className='md:flex md:items-start md:space-x-4'>
        <div className='md:w-1/3'>
          <FormSelect
            label='Country'
            name={`${prefix}.country`}
            options={[{ value: 'US', label: 'United States' }]}
            placeholder='Select country'
            defaultValue='US'
            required
          />
        </div>
        <div className='md:w-1/3'>
          <FormSelect
            label='County / State'
            name={
              prefix === 'shipping'
                ? `${prefix}.county_state`
                : `${prefix}.region`
            }
            options={unitedStatesSubdivisions}
            placeholder='Select region'
            required
            disabled={unitedStatesSubdivisions.length === 0}
          />
        </div>
        <div className='md:w-1/3'>
          <FormInput
            label='ZIP / Postcode'
            name={`${prefix}.postal_zip_code`}
            required
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddressFields;
