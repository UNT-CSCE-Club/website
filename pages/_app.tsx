import React from 'react';
import { AppProps } from 'next/app';

import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

import '../styles/globals.css';

import { Elements } from '@stripe/react-stripe-js';
import getStripe from 'lib/stripe/get-stripejs';

import { Layout } from 'components/common';

const stripePromise = getStripe();

const fonts = [
  { name: 'nunito-v16-latin-regular', weight: '400' },
  { name: 'nunito-v16-latin-200', weight: '200' },
  { name: 'nunito-v16-latin-300', weight: '300' },
  { name: 'nunito-v16-latin-600', weight: '600' },
  { name: 'nunito-v16-latin-700', weight: '700' },
  { name: 'nunito-v16-latin-800', weight: '800' },
  { name: 'nunito-v16-latin-900', weight: '900' },
];

const fontList = () => {
  const woffs = fonts.map(font => ({
    family: 'Nunito',
    src: `url(/fonts/${font.name}.woff)`,
    weight: font.weight,
    display: 'swap',
  }));
  const woff2s = fonts.map(font => ({
    family: 'Nunito',
    src: `url(/fonts/${font.name}.woff2)`,
    weight: font.weight,
    display: 'swap',
  }));

  return [...woffs, ...woff2s];
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Elements
        stripe={stripePromise}
        options={{
          fonts: fontList(),
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
