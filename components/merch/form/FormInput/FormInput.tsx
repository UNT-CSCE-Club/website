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
      <input
        {...register(name, { required: isRequired, ...validation })}
        id={name}
        name={name}
        type={type}
        className='appearance-none bg-transparent placeholder-faded-black border border-faded-black focus:border-black focus:outline-none rounded-md w-full text-base px-1.5 py-1'
        {...props}
      />
      <FormError name={name} />
    </div>
  );
};

export default FormInput;
