import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

interface Props
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'required'
  > {
  name: string;
  label: string;
  required?: boolean | string;
  validation?: Omit<RegisterOptions, 'required'>;
}

const FormCheckbox = ({
  name,
  id,
  label,
  required = false,
  validation = {},
  ...rest
}: Props) => {
  const { register } = useFormContext();

  const isRequired = required
    ? typeof required === 'boolean'
      ? `${label || name} is required`
      : required
    : false;

  return (
    <div className='py-1 md:py-2'>
      <label
        htmlFor={id || name}
        className='flex items-center w-full cursor-pointer'
      >
        <input
          {...register(name, { required: isRequired, ...validation })}
          id={id || name}
          name={name}
          type='checkbox'
          className='w-5 h-5 text-black bg-transparent border rounded appearance-none cursor-pointer checked:bg-black border-faded-black checked:border-black hover:border-black focus:border-black focus:checked:outline-none focus:outline-none'
          {...rest}
        />
        <span className='ml-2'>{label}</span>
      </label>
    </div>
  );
};

export default FormCheckbox;
