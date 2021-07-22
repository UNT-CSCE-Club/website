import { useEffect } from 'react';
import { useCheckoutState, useCheckoutDispatch } from 'context/checkout';

import { FormInput, FormCheckbox, FormTextarea } from '@/merch/form';

// TODO: Update the UI to be built from the API
// once products have extrafields that can be of
// any type. E.g. "date", "textarea"

// const fields = {
//   BookingDate: (props) => (
//     <>
//       <FormInput {...props} />
//     </>
//   ),
// };

function ExtraFieldsForm() {
  const { extrafields } = useCheckoutState();
  const { setCurrentStep, nextStepFrom } = useCheckoutDispatch();

  // useEffect(() => {
  //   if (extrafields.length === 0) {
  //     setCurrentStep(nextStepFrom('extrafields'));
  //   }
  //   return null;
  // }, [extrafields]);

  return (
    <div className='md:flex md:space-x-12 lg:space-x-24'>
      <div className='md:w-1/2'>
        <fieldset className='mb-3 md:mb-4'>
          <legend className='block py-3 text-lg font-medium text-black md:text-xl'>
            Booking
          </legend>

          <FormInput name='bookingDate' type='date' />

          <FormCheckbox
            name='takeClassInBrooklyn'
            label='Take the class at our space in Brooklyn'
          />

          <FormCheckbox name='takeClassOnline' label='Take the class online' />
        </fieldset>
      </div>

      <div className='md:w-1/2'>
        <fieldset className='mb-3 md:mb-4'>
          <legend className='block py-3 text-lg font-medium text-black md:text-xl'>
            Lesson Plan
          </legend>

          <p className='mb-3 font-serif text-sm italic font-medium text-black'>
            Thanks for joining us for a lesson! Let us know what you might like
            to learn or cook below.
          </p>

          {/* {extrafields.map(({ id }) => {
            const computedFieldName = `extrafields.${id}`;

            return (
              <FormTextarea
                key={id}
                id={computedFieldName}
                name={computedFieldName}
                placeholder="I'm interested in learning..."
                rows={7}
              />
            );
          })} */}
        </fieldset>
      </div>
    </div>
  );
}

export default ExtraFieldsForm;
