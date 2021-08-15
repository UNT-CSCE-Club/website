import { Checkout } from '@/merch/checkout';
import { useCartState } from 'context/cart';
import React from 'react';

const CheckoutPage = () => {
  const { id } = useCartState();

  return (
    <>
      <Checkout cartId={id} />
    </>
  );
};

export default CheckoutPage;
