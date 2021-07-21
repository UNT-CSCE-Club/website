import { GetStaticProps } from 'next';
import commerce from 'lib/commerce';
import { CategoryList } from '@/merch/categories';

export default function CategoriesPage({ categories }) {
  return (
    <>
      <h1 className='my-6'>Categories</h1>
      <CategoryList categories={categories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      categories,
    },
  };
};
