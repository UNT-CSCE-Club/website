import React from 'react';
import Link from 'next/link';
import { useCartState } from 'context/cart';
import { classNames } from 'lib/utils/classNames';
import { FiShoppingCart } from 'react-icons/fi';

interface Props
  extends Omit<
    React.DetailedHTMLProps<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      HTMLAnchorElement
    >,
    'title' | 'href' | 'children'
  > {
  className: string;
}

const ShoppingCartButton = ({ className, ...rest }: Props) => {
  const { total_unique_items } = useCartState();

  return (
    <Link href='/merch/cart'>
      <a
        title='View Shopping Cart'
        className={classNames('relative inline-block', className)}
        {...rest}
      >
        <FiShoppingCart className='w-6 h-6' />
        {total_unique_items > 0 && (
          <div className='absolute inline-flex items-center px-1 text-xs text-black align-middle bg-gray-300 border border-white rounded-full -right-1.5 dark:border-gray-900 -top-1.5'>
            {total_unique_items}
          </div>
        )}
      </a>
    </Link>
  );
};

export default ShoppingCartButton;
