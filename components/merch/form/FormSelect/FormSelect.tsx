import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { FormError } from '@/merch/form';

interface Props
  extends Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    'id' | 'name' | 'className'
  > {
  label: string;
  name: string;
  options: {
    value: any;
    label: any;
  }[];
  validation?: Omit<RegisterOptions, 'required'>;
}

const FormSelect = ({
  label,
  name,
  options,
  required = false,
  validation = {},
  placeholder,
  ...rest
}: Props) => {
  const { register } = useFormContext();

  const isRequired = required ? `${label || name} is required` : false;

  return (
    <div className='py-2'>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='mt-1'>
        <select
          {...register(name, { required: isRequired, ...validation })}
          id={name}
          name={name}
          className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
          defaultValue={rest.defaultValue ? rest.defaultValue : ''}
          {...rest}
        >
          <option disabled value=''>
            {placeholder || `Select a ${label}`}
          </option>

          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label || value}
            </option>
          ))}
        </select>
      </div>

      <FormError name={name} />
    </div>
  );
};

export default FormSelect;
