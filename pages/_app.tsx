import React from 'react';
import { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

import '../styles/globals.css';

import { Layout } from 'components/common';

import { Elements } from '@stripe/react-stripe-js';
import getStripe from 'lib/stripe/get-stripejs';
import { stripeFontList } from 'lib/fonts';

const stripePromise = getStripe();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Elements
        stripe={stripePromise}
        options={{
          fonts: stripeFontList,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Elements>
    </>
  );
}

export default MyApp;
