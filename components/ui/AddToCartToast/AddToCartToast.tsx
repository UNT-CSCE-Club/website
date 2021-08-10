import { Price } from '@chec/commerce.js/types/price';
import { Product } from '@chec/commerce.js/types/product';
import { CheckCircleIcon } from '@heroicons/react/outline';
import isDesktop from 'lib/utils/isDesktop';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';
import { Toast } from 'react-hot-toast/dist/core/types';
import CustomToastTransition from '../CustomToastTransition';

interface Props {
  t: Toast;
  product: Product;
  subTotal: Price;
}

const AddToCartToast = ({ t, product, subTotal }: Props) => {
  return (
    <CustomToastTransition t={t}>
      <div className='flex w-full max-w-md bg-white divide-x divide-gray-200 rounded-lg shadow-2xl pointer-events-auto ring-1 ring-black ring-opacity-5'>
        <div className='flex items-center flex-1 w-0 p-3'>
          <div className='flex-shrink-0 mr-3'>
            <CheckCircleIcon
              className='w-7 h-7 text-primary'
              aria-hidden='true'
            />
          </div>
          <div className='w-full'>
            <p className='text-sm font-medium text-gray-900'>
              {isDesktop() ? 'Item' : product.name} Added to Cart
            </p>
            <p className='mt-1 text-sm text-gray-500'>
              Your subtotal is now {subTotal.formatted_with_symbol}.
            </p>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col divide-y divide-gray-200'>
            <div className='flex flex-1 h-0'>
              <Link href='/merch/cart'>
                <a
                  onClick={() => toast.dismiss(t.id)}
                  className='flex items-center justify-center w-full px-4 py-3 text-sm font-medium border border-transparent rounded-none rounded-tr-lg text-primary hover:text-primary-dark focus:outline-none'
                >
                  View Cart
                </a>
              </Link>
            </div>
            <div className='flex flex-1 h-0'>
              <button
                className='flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 border border-transparent rounded-none rounded-br-lg hover:text-gray-500 focus:outline-none'
                onClick={() => toast.dismiss(t.id)}
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </CustomToastTransition>
  );
};

export default AddToCartToast;
