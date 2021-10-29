import { Checkout } from '@/merch/checkout';
import { useCartState } from 'context/cart';
import { CheckoutProvider } from 'context/checkout';
import React from 'react';
import { useEffect } from 'react';

const CheckoutPage = () => {
  return (
    <>
      <CheckoutProvider>
        <Checkout />
      </CheckoutProvider>
    </>
  );
};

export default CheckoutPage;
