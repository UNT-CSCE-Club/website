import React from 'react';
import Image from 'next/image';

import commerce from 'lib/commerce';
import { useCartDispatch } from 'context/cart';
import Link from 'next/link';

function CartItem({
  id,
  media,
  name,
  quantity,
  line_total,
  selected_options,
  permalink,
}) {
  const { setCart } = useCartDispatch();
  const hasVariants = selected_options.length >= 1;

  const handleUpdateCart = ({ cart }) => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart
      .remove(id)
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        console.log(
          `${name} has been removed from your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
        )
      );

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
          .then(({ subtotal }) =>
            console.log(
              `1 "${name}" has been removed from your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
            )
          )
      : handleRemoveItem();
  };

  const incrementQuantity = () =>
    commerce.cart
      .update(id, { quantity: quantity + 1 })
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        console.log(
          `Another "${name}" has been added to your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
        )
      );

  return (
    <div className='flex py-3 space-x-3 border-b border-black md:py-4 lg:py-5 md:items-end md:space-x-4 lg:space-x-5'>
      <div className='relative w-24 h-24 rounded md:w-48 md:h-48 lg:w-56 lg:h-56'>
        <Image
          src={media.source}
          alt={name}
          layout='fill'
          className='object-cover transition-all rounded-lg hover:rounded-none'
          loading='eager'
          priority={true}
        />
      </div>
      <div className='flex flex-col flex-grow md:flex-row md:items-end'>
        <div className='md:flex-grow'>
          <Link href={`/merch/products/${permalink}`}>
            <a className='text-xl leading-none md:text-2xl lg:text-3xl'>
              {name}
            </a>
          </Link>
          {hasVariants && (
            <p>
              {selected_options.map(({ option_name }, index) => (
                <React.Fragment key={index}>
                  {index ? `, ${option_name}` : option_name}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
        <div className='flex flex-col items-start justify-between flex-grow md:items-end'>
          <div className='text-lg md:text-xl lg:text-2xl'>
            {line_total.formatted_with_symbol}
          </div>
          <div className='flex items-center justify-between w-full md:flex-col md:items-end'>
            <div className='inline-flex items-center md:pb-4 lg:pb-5'>
              <span className='pr-2'>Quantity:</span>
              <button
                onClick={decrementQuantity}
                className='inline-flex items-center justify-center w-5 h-5 text-xs text-black transition border border-black rounded-lg appearance-none focus:outline-none hover:bg-black hover:text-white'
              >
                -
              </button>
              <span className='px-2 md:text-lg'>{quantity}</span>
              <button
                onClick={incrementQuantity}
                className='inline-flex items-center justify-center w-5 h-5 text-xs text-black transition border border-black rounded-lg appearance-none focus:outline-none hover:bg-black hover:text-white'
              >
                +
              </button>
            </div>
            <div>
              <button
                onClick={handleRemoveItem}
                className='inline-flex items-center justify-center h-5 px-1 text-xs text-black transition border border-black rounded-lg opacity-50 appearance-none hover:opacity-100 focus:opacity-100 focus:outline-none'
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
