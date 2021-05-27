import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

// const fonts = [
//   'nunito-v16-latin-regular',
//   'nunito-v16-latin-italic',
//   'nunito-v16-latin-200',
//   'nunito-v16-latin-200italic',
//   'nunito-v16-latin-300',
//   'nunito-v16-latin-300italic',
//   'nunito-v16-latin-600',
//   'nunito-v16-latin-600italic',
//   'nunito-v16-latin-700',
//   'nunito-v16-latin-700italic',
//   'nunito-v16-latin-800',
//   'nunito-v16-latin-800italic',
//   'nunito-v16-latin-900',
//   'nunito-v16-latin-900italic',
// ];
const fonts = [
  'nunito-v16-latin-regular',
  'nunito-v16-latin-200',
  'nunito-v16-latin-300',
  'nunito-v16-latin-600',
  'nunito-v16-latin-700',
  'nunito-v16-latin-800',
  'nunito-v16-latin-900',
];

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png?v=2'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png?v=2'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png?v=2'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/safari-pinned-tab.svg?v=2'
            color='#00853e'
          />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#00853e' />
          {fonts.map(font => (
            <React.Fragment key={font}>
              <link
                rel='preload'
                href={`/fonts/${font}.woff`}
                crossOrigin='anonymous'
                as='font'
                type='font/woff'
              />
              <link
                rel='preload'
                href={`/fonts/${font}.woff2`}
                crossOrigin='anonymous'
                as='font'
                type='font/woff2'
              />
            </React.Fragment>
          ))}
        </Head>
        <body className='h-full !m-0'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
