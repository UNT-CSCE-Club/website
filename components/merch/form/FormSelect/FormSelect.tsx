import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import { FormError } from '@/merch/form';

interface Props
  extends Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    'id' | 'name' | 'className' | 'defaultValue'
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
      <div className='relative w-full overflow-hidden border rounded-md border-faded-black focus:border-black focus:outline-none'>
        <select
          {...register(name, { required: isRequired, ...validation })}
          id={name}
          name={name}
          className='appearance-none bg-transparent w-full py-1 pr-6 pl-1.5 text-base placeholder-faded-black focus:outline-none'
          defaultValue=''
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
