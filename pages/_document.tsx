import Document, { Html, Head, Main, NextScript } from 'next/document';

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
          <link
            rel='preload'
            href='/fonts/nunito-v16-latin-regular.woff2'
            crossOrigin='anonymous'
            as='font'
            type='font/woff2'
          />
          <link
            rel='preload'
            href='/fonts/nunito-v16-latin-600.woff2'
            crossOrigin='anonymous'
            as='font'
            type='font/woff2'
          />
          <link
            rel='preload'
            href='/fonts/nunito-v16-latin-700.woff2'
            crossOrigin='anonymous'
            as='font'
            type='font/woff2'
          />
          <link
            rel='preload'
            href='/fonts/nunito-v16-latin-800.woff2'
            crossOrigin='anonymous'
            as='font'
            type='font/woff2'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
