import { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LineItem } from '@chec/commerce.js/types/line-item';
import useCartItem from './useCartItem';

interface Props {
  item: LineItem;
}

const CartItem = ({ item }: Props) => {
  const {
    hasVariants,
    handleRemoveItem,
    decrementQuantity,
    incrementQuantity,
    setIsOpen,
  } = useCartItem(item);

  return (
    <li key={item.id} className='flex py-6'>
      <div className='flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md'>
        {item?.media?.type === 'image' ? (
          <img
            src={item.media.source}
            alt={`${item.name} image`}
            className='object-cover object-center w-full h-full'
          />
        ) : null}
      </div>

      <div className='flex flex-col flex-1 ml-4'>
        <div>
          <div className='flex justify-between text-base font-medium text-gray-900'>
            <h3>
              <Link href={`/merch/products/${item.permalink}`}>
                <a onClick={() => setIsOpen(false)} className='rounded'>
                  {item.name}
                </a>
              </Link>
            </h3>
            <p className='ml-4'>{item.price.formatted_with_symbol}</p>
          </div>
          {hasVariants && (
            <p className='mt-1 text-sm text-gray-500'>
              {item.selected_options.map(({ option_name }, index) => (
                <Fragment key={index}>
                  {index ? `, ${option_name}` : option_name}
                </Fragment>
              ))}
            </p>
          )}
        </div>
        <div className='flex items-end justify-between flex-1 text-sm'>
          <p className='text-gray-500'>Qty {item.quantity}</p>

          <div className='flex'>
            <button
              type='button'
              onClick={handleRemoveItem}
              className='font-medium rounded text-primary-dark hover:text-primary'
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>

    // <div className='flex py-3 space-x-3 border-b border-black md:py-4 lg:py-5 md:items-end md:space-x-4 lg:space-x-5'>
    //   <div className='relative w-24 h-24 rounded md:w-48 md:h-48 lg:w-56 lg:h-56'>
    //     <Image
    //       src={media.source}
    //       alt={name}
    //       layout='fill'
    //       className='object-cover transition-all rounded-lg hover:rounded-none'
    //       loading='eager'
    //       priority={true}
    //     />
    //   </div>
    //   <div className='flex flex-col flex-grow md:flex-row md:items-end'>
    //     <div className='md:flex-grow'>
    //       <Link href={`/merch/products/${permalink}`}>
    //         <a className='text-xl leading-none md:text-2xl lg:text-3xl'>
    //           {name}
    //         </a>
    //       </Link>
    //       {hasVariants && (
    //         <p>
    //           {selected_options.map(({ option_name }, index) => (
    //             <Fragment key={index}>
    //               {index ? `, ${option_name}` : option_name}
    //             </Fragment>
    //           ))}
    //         </p>
    //       )}
    //     </div>
    //     <div className='flex flex-col items-start justify-between flex-grow md:items-end'>
    //       <div className='text-lg md:text-xl lg:text-2xl'>
    //         {line_total.formatted_with_symbol}
    //       </div>
    //       <div className='flex items-center justify-between w-full md:flex-col md:items-end'>
    //         <div className='inline-flex items-center md:pb-4 lg:pb-5'>
    //           <span className='pr-2'>Quantity:</span>
    //           <button
    //             onClick={decrementQuantity}
    //             className='inline-flex items-center justify-center w-5 h-5 text-xs text-black transition border border-black rounded-lg appearance-none focus:outline-none hover:bg-black hover:text-white'
    //           >
    //             -
    //           </button>
    //           <span className='px-2 md:text-lg'>{quantity}</span>
    //           <button
    //             onClick={incrementQuantity}
    //             className='inline-flex items-center justify-center w-5 h-5 text-xs text-black transition border border-black rounded-lg appearance-none focus:outline-none hover:bg-black hover:text-white'
    //           >
    //             +
    //           </button>
    //         </div>
    //         <div>
    //           <button
    //             onClick={handleRemoveItem}
    //             className='inline-flex items-center justify-center h-5 px-1 text-xs text-black transition border border-black rounded-lg opacity-50 appearance-none hover:opacity-100 focus:opacity-100 focus:outline-none'
    //           >
    //             Remove
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default CartItem;
