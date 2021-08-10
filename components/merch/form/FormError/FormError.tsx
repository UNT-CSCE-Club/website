import { classNames } from 'lib/utils/classNames';
import { ErrorMessage } from '@hookform/error-message';

interface Props {
  name: string;
  className?: string;
}

const FormError = ({ name, className }: Props) => {
  return (
    <div className='pt-1'>
      <ErrorMessage
        name={name}
        render={({ message }) => (
          <span className={classNames('text-red-500 text-sm', className)}>
            {message}
          </span>
        )}
      />
    </div>
  );
};

export default FormError;
