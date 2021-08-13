import Link from 'next/link';
import { RelatedProductType } from 'types';
import { RelatedProduct } from '@/merch/products';

interface Props {
  products: RelatedProductType[];
}

const RelatedProducts = ({ products }: Props) => {
  if (!products || products.length === 0) return null;

  return (
    <section
      aria-labelledby='related-heading'
      className='px-4 py-16 border-t border-gray-200 sm:px-0'
    >
      <h2 id='related-heading' className='text-xl font-bold text-gray-900'>
        Customers also bought
      </h2>

      <div className='grid grid-cols-1 mt-8 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
        {products.map(product => (
          <RelatedProduct product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
