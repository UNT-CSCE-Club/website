import { useFormContext } from 'react-hook-form';
import { FormError } from '@/merch/form';

interface Props {
  label?: string;
  name: string;
  required?: boolean | string;
  validation?: any;
  [x: string]: any;
}

function FormTextarea({
  label,
  name,
  required = false,
  validation = {},
  ...props
}: Props) {
  const { register } = useFormContext();

  const isRequired = required ? `${label || name} is required` : false;

  return (
    <div className='py-2'>
      <textarea
        {...register(name, { required: isRequired, ...validation })}
        id={name}
        name={name}
        className='appearance-none bg-transparent placeholder-faded-black border border-faded-black focus:border-black focus:outline-none rounded-md w-full text-base px-1.5 py-1'
        {...props}
      />
      <FormError name={name} />
    </div>
  );
}

export default FormTextarea;
