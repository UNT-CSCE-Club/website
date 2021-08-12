import { GetStaticProps } from 'next';
import commerce from 'lib/commerce';
import { CategoryPage } from '@/merch/categories';

const ProductsPage = ({ products, categories }) => {
  return <CategoryPage products={products} categoriesList={categories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data: products } = await commerce.products.list();

  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      products,
      categories,
    },
  };
};

export default ProductsPage;
