import { useCheckoutState } from 'context/checkout';
import { classNames } from 'lib/utils/classNames';

function CheckoutSummary({
  subtotal,
  tax,
  shipping,
  line_items = [],
  total_due,
}) {
  const { processing, error } = useCheckoutState();
  const count = line_items.length;

  return (
    <div className='py-6'>
      <div className='md:flex md:justify-between md:space-x-6'>
        <div className='w-full md:w-1/2'>
          <ol>
            {subtotal && <li>Subtotal: {subtotal.formatted_with_symbol}</li>}
            {tax && <li>Tax: {tax.amount.formatted_with_symbol}</li>}
            {shipping && (
              <li>Shipping: {shipping.price.formatted_with_symbol}</li>
            )}
            {total_due && (
              <li className='py-3 text-lg md:text-xl'>
                Total: {total_due.formatted_with_symbol}, {count}{' '}
                {count === 1 ? 'item' : 'items'}
              </li>
            )}
          </ol>
        </div>
        <div className='w-full md:w-1/2 md:flex md:items-end md:justify-end'>
          <div className='flex items-center space-x-3'>
            {error && <span className='text-sm text-red-500'>{error}</span>}
            <button
              type='submit'
              className={classNames(
                'appearance-none leading-none p-1 md:p-2 lg:p-3 text-lg md:text-xl',
                processing && 'opacity-75 cursor-not-allowed'
              )}
              disabled={processing}
            >
              {processing ? 'Processing order' : 'Continue'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
