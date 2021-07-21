import { Product } from '@chec/commerce.js/types/product';
import commerce from 'lib/commerce';
import { GetStaticPaths, GetStaticProps } from 'next';

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  return (
    <>
      <h1>{product.name}</h1>
      <p>{product.price.formatted_with_symbol}</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink as string, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map(product => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
};

export default ProductPage;
