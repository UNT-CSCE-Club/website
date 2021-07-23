import Link from 'next/link';
import { GetStaticProps } from 'next';
import commerce from 'lib/commerce';
import { ProductList } from '@/merch/products';
import { CategoryList } from '@/merch/categories';
import { Category } from '@chec/commerce.js/types/category';
import { Product } from '@chec/commerce.js/types/product';
import { Merchant } from '@chec/commerce.js/types/merchant';
import { Checkout } from '@/merch/checkout';
import { useCartState } from 'context/cart';

interface MerchPageProps {
  merchant: Merchant;
  categories: Category[];
  products: Product[];
}

const MerchPage = ({ merchant, categories, products }: MerchPageProps) => {
  const { id } = useCartState();
  return (
    <>
      <header className='mb-6'>
        <h1>{merchant.business_name} Merch</h1>
      </header>
      <section className='mb-6'>
        <h3>
          <Link href='/merch/categories'>
            <a>Categories</a>
          </Link>
        </h3>
        <CategoryList categories={categories} />
      </section>
      <section>
        <h3>
          <Link href='/merch/products'>
            <a>Products</a>
          </Link>
        </h3>
        <ProductList products={products} />
      </section>
      {/* <Checkout cartId={id} /> */}
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const merchantRes: any = await commerce.merchants.about();
  const merchant: Merchant = merchantRes.data[0];

  const { data: categories } = await commerce.categories.list();

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
