import React, { Fragment } from 'react';
import Link from 'next/link';
import { useCheckoutState } from 'context/checkout';
import { classNames } from 'lib/utils/classNames';

function CheckoutSummary({
  subtotal,
  tax,
  shipping,
  line_items = [],
  total_due,
  ...rest
}) {
  const { processing, error } = useCheckoutState();

  return (
    <div className='mt-10 lg:mt-0'>
      <h2 className='text-lg font-medium text-gray-900'>Order summary</h2>

      <div className='mt-4 bg-white border border-gray-200 rounded-lg shadow-sm'>
        <h3 className='sr-only'>Items in your cart</h3>
        <ul role='list' className='divide-y divide-gray-200'>
          {line_items.map(product => (
            <li key={product.id} className='flex px-4 py-6 sm:px-6'>
              <div className='flex-shrink-0'>
                {product?.media?.type === 'image' ? (
                  <img
                    src={product.media.source}
                    alt={`${product.name} image`}
                    className='w-20 bg-gray-100 rounded-md'
                  />
                ) : null}
              </div>

              <div className='flex flex-col flex-1 ml-6'>
                <div className='flex'>
                  <div className='flex-1 min-w-0'>
                    <h4 className='text-sm'>
                      <Link href={`/merch/products/${product.permalink}`}>
                        <a className='font-medium text-gray-700 hover:text-gray-800'>
                          {product.name}
                        </a>
                      </Link>
                    </h4>
                    {product.variant && (
                      <p className='mt-1 text-sm text-gray-500'>
                        {product.selected_options.map(
                          ({ option_name }, index) => (
                            <Fragment key={index}>
                              {index ? `, ${option_name}` : option_name}
                            </Fragment>
                          )
                        )}
                      </p>
                    )}
                  </div>

                  <div className='flex-shrink-0 flow-root ml-4'>
                    <span className='-m-2.5 p-2.5 flex items-center justify-center'>
                      {product.price.formatted_with_symbol}
                    </span>
                  </div>
                </div>

                <div className='flex items-end justify-between flex-1 pt-2'>
                  <p className='mt-1 text-sm font-medium text-gray-900'>
                    Qty {product.quantity}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <dl className='px-4 py-6 space-y-6 border-t border-gray-200 sm:px-6'>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Subtotal</dt>
            <dd className='text-sm font-medium text-gray-900'>
              {subtotal && subtotal.formatted_with_symbol}
            </dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Shipping</dt>
            <dd className='text-sm font-medium text-gray-900'>
              {shipping && shipping.price.formatted_with_symbol}
            </dd>
          </div>
          <div className='flex items-center justify-between'>
            <dt className='text-sm'>Taxes</dt>
            <dd className='text-sm font-medium text-gray-900'>
              {tax && tax.amount.formatted_with_symbol}
            </dd>
          </div>
          <div className='flex items-center justify-between pt-6 border-t border-gray-200'>
            <dt className='text-base font-medium'>Total</dt>
            <dd className='text-base font-medium text-gray-900'>
              {total_due && total_due.formatted_with_symbol}
            </dd>
          </div>
        </dl>

        <div className='px-4 py-6 border-t border-gray-200 sm:px-6'>
          {error && (
            <span className='block pb-4 text-sm text-red-500'>{error}</span>
          )}
          <button
            type='submit'
            className={classNames(
              'w-full px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light',
              processing && 'cursor-not-allowed'
            )}
            disabled={processing}
          >
            {processing ? 'Processing order' : 'Comfirm order'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutSummary;
