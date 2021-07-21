import React from 'react';
import { GetStaticProps } from 'next';
import commerce from 'lib/commerce';
import { ProductList } from '@/merch/products';

const ProductsPage = ({ products }) => {
  return (
    <>
      <h1 className='my-6'>Products</h1>
      <ProductList products={products} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: products } = await commerce.products.list();

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
