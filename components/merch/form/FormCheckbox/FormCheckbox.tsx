import { useFormContext } from 'react-hook-form';

interface Props {
  label: string;
  children?: any;
  name: string;
  required?: boolean | string;
  validation?: any;
  [x: string]: any;
}

function FormCheckbox({
  label,
  children,
  name,
  required = false,
  validation = {},

  ...props
}: Props) {
  const { register } = useFormContext();

  const isRequired = required
    ? typeof required === 'boolean'
      ? `${label || name} is required`
      : required
    : false;

  return (
    <div className='py-1 md:py-2'>
      <label
        htmlFor={props.id || name}
        className='flex items-center w-full cursor-pointer'
      >
        <input
          {...register(name, { required: isRequired, ...validation })}
          id={props.id || name}
          name={name}
          type='checkbox'
          className='w-5 h-5 text-black bg-transparent border rounded appearance-none cursor-pointer checked:bg-black border-faded-black checked:border-black hover:border-black focus:border-black focus:checked:outline-none focus:outline-none'
          {...props}
        />

        {(children || label) && (
          <span className='ml-2'>{children || label}</span>
        )}
      </label>
    </div>
  );
}

export default FormCheckbox;
