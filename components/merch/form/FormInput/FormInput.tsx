import { useFormContext } from 'react-hook-form';
import { FormError } from '@/merch/form';

interface Props {
  label?: string;
  name: string;
  type?: string;
  required?: boolean | string;
  validation?: any;
  [x: string]: any;
}

function FormInput({
  label,
  name,
  type = 'text',
  required = false,
  validation = {},
  ...props
}: Props) {
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
}

export default FormInput;
