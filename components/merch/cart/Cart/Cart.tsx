import Link from 'next/link';
import { useCartState } from 'context/cart';
import { CartItem } from '@/merch/cart';

const Cart = () => {
  const { line_items, subtotal, total_unique_items } = useCartState();

  const isEmpty = line_items.length === 0;

  return (
    <>
      {isEmpty ? (
        <>
          <p className='mt-2'>Your cart is empty.</p>
          <Link href='/merch'>
            <a className='mt-2 text-primary hover:underline'>
              Check out our merch
            </a>
          </Link>
        </>
      ) : (
        <>
          <div className='flex flex-col justify-between h-full'>
            <div>
              {line_items.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className='flex items-center justify-between py-3 md:py-4 lg:py-5'>
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
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
