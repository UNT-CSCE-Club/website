import { GetStaticPaths, GetStaticProps } from 'next';
import { Category } from '@chec/commerce.js/types/category';
import { Product } from '@chec/commerce.js/types/product';
import commerce from 'lib/commerce';
import { ProductList } from '@/merch/products';

interface CategoryPageProps {
  category: Category;
  products: Product[];
}

const CategoryPage = ({ category, products }: CategoryPageProps) => {
  return (
    <>
      <h1>{category.name}</h1>

      <ProductList products={products} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: categories } = await commerce.categories.list();

  return {
    paths: categories.map(category => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const category = await commerce.categories.retrieve(slug as string, {
    type: 'slug',
  });

  const { data } = await commerce.products.list({
    category_slug: [slug],
  });

  const products = data ?? null;

  return {
    props: {
      category,
      products,
    },
  };
};

export default CategoryPage;
