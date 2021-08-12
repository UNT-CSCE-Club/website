import Link from 'next/link';
import { GetStaticProps } from 'next';
import commerce from 'lib/commerce';
import { Category } from '@chec/commerce.js/types/category';
import { Product } from '@chec/commerce.js/types/product';
import { Merchant } from '@chec/commerce.js/types/merchant';
import { CategorySection, MerchHero } from '@/merch/home';

interface MerchPageProps {
  merchant: Merchant;
  categories: Category[];
  products: Product[];
}

const MerchPage = ({ merchant, categories, products }: MerchPageProps) => {
  console.log({ categories, merchant, products });

  return (
    <>
      <MerchHero />
      <CategorySection categories={categories} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const merchantRes: any = await commerce.merchants.about();
  const merchant: Merchant = merchantRes.data[0];

  const { data: categories } = await commerce.categories.list();
  categories.reverse();

  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
};

export default MerchPage;
