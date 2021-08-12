import { ProductList } from '@/merch/products';
import { Product } from '@chec/commerce.js/types/product';
import React from 'react';

interface Props {
  products: Product[];
}

const FavoritesSection = ({ products }: Props) => {
  return (
    <section aria-labelledby='favorites-heading'>
      <div className='py-24 sm:py-32 my-container'>
        <div className='mb-6'>
          <h2
            id='favorites-heading'
            className='text-2xl font-extrabold tracking-tight text-gray-900'
          >
            Our Favorites
          </h2>
        </div>
        <div className='mx-auto xl:hidden'>
          <ProductList products={products} />
        </div>
        <div className='hidden mx-auto xl:block'>
          <ProductList products={products} large />
        </div>
      </div>
    </section>
  );
};

export default FavoritesSection;
