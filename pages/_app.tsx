import React from 'react';
import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import '../styles/globals.css';

import SEO from 'next-seo.config';

import { Layout } from 'components/common';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
