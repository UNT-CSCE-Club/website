import React from 'react';
import { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

import '../styles/globals.css';

import { Layout } from 'components/common';

import { Elements } from '@stripe/react-stripe-js';
import getStripe from 'lib/stripe/get-stripejs';
import { CartProvider } from 'context/cart';
import { CheckoutProvider } from 'context/checkout';

const stripePromise = getStripe();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Elements
        stripe={stripePromise}
        options={{
          fonts: [
            {
              cssSrc:
                'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap',
            },
          ],
        }}
      >
        <CartProvider>
          <CheckoutProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CheckoutProvider>
        </CartProvider>
      </Elements>
    </>
  );
}

export default MyApp;
