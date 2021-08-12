import { GetStaticPaths, GetStaticProps } from 'next';
import { Category } from '@chec/commerce.js/types/category';
import { Product } from '@chec/commerce.js/types/product';
import commerce from 'lib/commerce';
import { CategoryPage } from '@/merch/categories';

interface CategoriesPageProps {
  category: Category;
  products: Product[];
  categories: Category[];
}

const CategoriesPage = ({
  category,
  products,
  categories,
}: CategoriesPageProps) => {
  return (
    <>
      <CategoryPage
        category={category}
        products={products}
        categoriesList={categories}
      />
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

  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      category,
      products,
      categories,
    },
  };
};

export default CategoriesPage;
