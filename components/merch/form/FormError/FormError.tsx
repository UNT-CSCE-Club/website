import { classNames } from 'lib/utils/classNames';
import { ErrorMessage } from '@hookform/error-message';

interface Props {
  name: string;
  className?: string;
  [x: string]: any;
}

function FormError({ name, className, ...props }: Props) {
  return (
    <div className='pt-1'>
      <ErrorMessage
        name={name}
        {...props}
        render={({ message }) => (
          <span
            className={classNames('text-red-500 text-sm', className)}
            {...props}
          >
            {message}
          </span>
        )}
      />
    </div>
  );
}

export default FormError;
