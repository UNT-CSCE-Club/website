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
  { name: 'nunito-v16-latin-regular', weight: '400' },
  { name: 'nunito-v16-latin-200', weight: '200' },
  { name: 'nunito-v16-latin-300', weight: '300' },
  { name: 'nunito-v16-latin-600', weight: '600' },
  { name: 'nunito-v16-latin-700', weight: '700' },
  { name: 'nunito-v16-latin-800', weight: '800' },
  { name: 'nunito-v16-latin-900', weight: '900' },
];

export const genStripeFonts = () => {
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

export const stripeFontList = genStripeFonts();

export const PreloadFonts = () => (
  <>
    {fonts.map((font, index) => (
      <React.Fragment key={index}>
        <link
          rel='preload'
          href={`/fonts/${font.name}.woff`}
          crossOrigin='anonymous'
          as='font'
          type='font/woff'
        />
        <link
          rel='preload'
          href={`/fonts/${font.name}.woff2`}
          crossOrigin='anonymous'
          as='font'
          type='font/woff2'
        />
      </React.Fragment>
    ))}
  </>
);
