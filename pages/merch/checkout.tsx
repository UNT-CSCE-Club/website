import { Checkout } from '@/merch/checkout';
import { useCartState } from 'context/cart';
import { CheckoutProvider } from 'context/checkout';
import { useRouter } from 'next/dist/client/router';
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
