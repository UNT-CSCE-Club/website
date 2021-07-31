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
import toast from 'react-hot-toast';
import { FiCheck } from 'react-icons/fi';
import React, { Fragment } from 'react';
import { CheckCircleIcon } from '@heroicons/react/outline';
import { Transition } from '@headlessui/react';

interface MerchPageProps {
  merchant: Merchant;
  categories: Category[];
  products: Product[];
}

const MerchPage = ({ merchant, categories, products }: MerchPageProps) => {
  const { id } = useCartState();

  const x = () => {
    toast.custom(
      t => (
        <Transition
          as={Fragment}
          show={t.visible}
          appear={true}
          enter='transform ease-out duration-300 transition'
          enterFrom='translate-y-20 scale-0 opacity-0 lg:scale-100 lg:translate-y-0 lg:translate-x-20'
          enterTo='translate-y-0 scale-100 opacity-100 lg:translate-x-0'
          leave='transition ease-in duration-300'
          leaveFrom='translate-y-0 scale-100 opacity-100 lg:translate-x-0'
          leaveTo='translate-y-20 scale-0 opacity-0 lg:scale-100 lg:translate-y-0 lg:translate-x-20'
        >
          <div className='flex w-full max-w-md bg-white divide-x divide-gray-200 rounded-lg shadow-2xl pointer-events-auto ring-1 ring-black ring-opacity-5'>
            <div className='flex items-center flex-1 w-0 p-3'>
              <div className='flex-shrink-0 mr-3'>
                <CheckCircleIcon
                  className='w-7 h-7 text-primary'
                  aria-hidden='true'
                />
              </div>
              <div className='w-full'>
                <p className='text-sm font-medium text-gray-900'>
                  Club Sweatshirt Added to Cart
                </p>
                <p className='mt-1 text-sm text-gray-500'>
                  Your subtotal is now $20.00.
                </p>
              </div>
            </div>
            <div className='flex'>
              <div className='flex flex-col divide-y divide-gray-200'>
                <div className='flex flex-1 h-0'>
                  <Link href='/merch/cart'>
                    <a
                      onClick={() => toast.dismiss(t.id)}
                      className='flex items-center justify-center w-full px-4 py-3 text-sm font-medium border border-transparent rounded-none rounded-tr-lg text-primary hover:text-primary-dark focus:outline-none'
                    >
                      View Cart
                    </a>
                  </Link>
                </div>
                <div className='flex flex-1 h-0'>
                  <button
                    className='flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 border border-transparent rounded-none rounded-br-lg hover:text-gray-500 focus:outline-none'
                    onClick={() => toast.dismiss(t.id)}
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      ),
      {
        duration: Infinity,
      }
    );
  };

  const y = () => {
    toast.error(t => (
      <>
        <p className='text-sm font-medium text-gray-900'>
          Club Shirt Added to Cart
        </p>
      </>
    ));
  };

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
      <button onClick={y}>toast</button>
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
