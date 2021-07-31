import { GetStaticPaths, GetStaticProps } from 'next';
import { Product as ProductType } from '@chec/commerce.js/types/product';
import commerce from 'lib/commerce';
import { Product } from '@/merch/products';

interface ProductPageProps {
  product: ProductType;
}

const ProductPage = ({ product }: ProductPageProps) => (
  <Product product={product} />
);

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
