import React from 'react';

const ProductAttributes = ({ attributes = [] }) => {
  if (!attributes || attributes.length === 0) return null;

  return (
    <div className='hidden grid-cols-1 gap-4 py-4 md:grid md:grid-cols-2'>
      {attributes.map(fileName => (
        <div
          key={fileName}
          className='flex items-center justify-center w-full h-24'
        >
          <img
            src={`/product-attributes/${fileName}`}
            className='inline-block'
          />
        </div>
      ))}
    </div>
  );
};

export default ProductAttributes;
