import { Price } from '@chec/commerce.js/types/price';
import { useCartDispatch } from 'context/cart';
import Link from 'next/link';
import React from 'react';

const CartSummary = ({
  subtotal,
  isEmpty,
}: {
  subtotal: Price;
  isEmpty: boolean;
}) => {
  const { setIsOpen } = useCartDispatch();

  return (
    <div className='px-4 py-6 border-t border-gray-200 sm:px-6'>
      <div className='flex justify-between text-base font-medium text-gray-900'>
        <p>Subtotal</p>
        <p>{subtotal?.formatted_with_symbol}</p>
      </div>
      <p className='mt-0.5 text-sm text-gray-500'>
        Shipping and taxes calculated at checkout.
      </p>
      {!isEmpty ? (
        <div className='mt-6'>
          <Link href='/merch/checkout'>
            <a
              onClick={() => setIsOpen(false)}
              className='flex items-center justify-center px-6 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-primary hover:bg-primary-light'
            >
              Checkout
            </a>
          </Link>
        </div>
      ) : null}
      <div className='flex justify-center mt-6 text-sm text-center text-gray-500'>
        <p>
          or{' '}
          <button
            type='button'
            className='font-medium rounded text-primary-dark hover:text-primary'
            onClick={() => setIsOpen(false)}
          >
            Continue Shopping
            <span aria-hidden='true'> &rarr;</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
