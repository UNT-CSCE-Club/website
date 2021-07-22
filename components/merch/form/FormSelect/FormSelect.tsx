import { useFormContext } from 'react-hook-form';
import { FormError } from '@/merch/form';

interface Props {
  label: string;
  name: string;
  options: any;
  required?: boolean | string;
  validation?: any;
  placeholder?: any;
  [x: string]: any;
}

function FormSelect({
  label,
  name,
  options,
  required = false,
  validation = {},
  placeholder,
  ...props
}: Props) {
  const { register } = useFormContext();

  const isRequired = required ? `${label || name} is required` : false;

  return (
    <div className='py-2'>
      <div className='relative w-full overflow-hidden border rounded-md border-faded-black focus:border-black focus:outline-none'>
        <select
          {...register(name, { required: isRequired, ...validation })}
          id={name}
          name={name}
          className='appearance-none bg-transparent w-full py-1 pr-6 pl-1.5 text-base placeholder-faded-black focus:outline-none'
          defaultValue=''
          {...props}
        >
          <option disabled value=''>
            {placeholder || `Select a ${label}`}
          </option>

          <option value='US'>Plain US</option>
          <option value='TX'>Plain TX</option>

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
}

export default FormSelect;
