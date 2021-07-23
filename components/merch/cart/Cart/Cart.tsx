import { useCartState } from 'context/cart';

import { CartItem } from '@/merch/cart';
import Link from 'next/link';

export default function Cart() {
  const { line_items, subtotal, total_unique_items } = useCartState();

  const isEmpty = line_items.length === 0;

  return (
    <div className='flex flex-col justify-between h-full'>
      <div>
        {line_items.map(item => {
          console.log(item);
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <div className='flex items-center justify-between py-3 md:py-4 lg:py-5'>
        {isEmpty ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className='text-lg md:text-xl'>
              Total: {subtotal?.formatted_with_symbol}, {total_unique_items}{' '}
              {total_unique_items === 1 ? 'item' : 'items'}
            </div>
            <div>
              <Link href='/merch/checkout'>
                <a className='appearance-none leading-none p-1 md:p-1.5 lg:px-3.5 text-lg md:text-xl'>
                  Check Out
                </a>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
