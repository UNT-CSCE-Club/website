import React from 'react';
import { useRouter } from 'next/router';
import { useCartDispatch, useCartState } from 'context/cart';
import { classNames } from 'lib/utils/classNames';
import { FiShoppingCart } from 'react-icons/fi';

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'title' | 'type' | 'children' | 'onClick' | 'disabled'
  > {
  className: string;
  callback?: () => any;
}

const ShoppingCartButton = ({ className, callback, ...rest }: Props) => {
  const { total_unique_items, isOpen } = useCartState();
  const { setIsOpen } = useCartDispatch();
  const router = useRouter();

  return (
    <button
      type='button'
      onClick={() => {
        setIsOpen(!isOpen);
        if (callback !== undefined) {
          callback();
        }
      }}
      title='View Shopping Cart'
      className={classNames(
        'relative',
        className,
        router.pathname === '/merch/checkout' ? 'hidden' : 'inline-block'
      )}
      {...rest}
    >
      <FiShoppingCart className='w-6 h-6' />
      {total_unique_items > 0 && (
        <div className='absolute inline-flex items-center px-1 text-xs text-black align-middle bg-gray-300 border border-white rounded-full -right-1.5 dark:border-gray-900 -top-1.5'>
          {total_unique_items}
        </div>
      )}
    </button>
  );
};

export default ShoppingCartButton;
