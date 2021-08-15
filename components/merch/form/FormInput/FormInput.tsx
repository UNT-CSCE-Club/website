import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { FormError } from '@/merch/form';

interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'required' | 'id' | 'name' | 'className'
  > {
  label?: string;
  name: string;
  required?: boolean;
  validation?: Omit<RegisterOptions, 'required'>;
}

const FormInput = ({
  label,
  name,
  type = 'text',
  required = false,
  validation = {},
  ...props
}: Props) => {
  const { register } = useFormContext();

  const isRequired = required ? `${label || name} is required` : false;

  return (
    <div className='py-2'>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <div className='mt-1'>
        <input
          {...register(name, { required: isRequired, ...validation })}
          id={name}
          name={name}
          type={type}
          className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'
          {...props}
        />
      </div>
      <FormError name={name} />
    </div>
  );
};

export default FormInput;
