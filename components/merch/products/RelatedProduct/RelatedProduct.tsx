import Image from 'next/image';
import Link from 'next/link';
import { classNames } from 'lib/utils/classNames';
import { RelatedProductType } from 'types';

interface Props {
  product: RelatedProductType;
  className?: string;
}

const RelatedProduct = ({ product, className }: Props) => {
  const imageClass = classNames(
    'relative rounded-lg hover:rounded-none overflow-hidden w-full transition-all',
    className
  );

  return (
    <div key={product.id}>
      <div className='relative'>
        <div className='relative w-full overflow-hidden rounded-lg h-72'>
          <img
            src={product.media.source}
            alt={`${product.name} image`}
            className='object-cover object-center w-full h-full'
          />
        </div>
        <div className='relative mt-4'>
          <h3 className='text-sm font-medium text-gray-900'>{product.name}</h3>
        </div>
        <div className='absolute inset-x-0 top-0 flex items-end justify-end p-4 overflow-hidden rounded-lg h-72'>
          <div
            aria-hidden='true'
            className='absolute inset-x-0 bottom-0 opacity-50 h-36 bg-gradient-to-t from-black'
          />
          <p className='relative text-lg font-semibold text-white'>
            {product.price.formatted_with_symbol}
          </p>
        </div>
      </div>
      <div className='mt-6'>
        <Link href={`/merch/products/${product.permalink}`}>
          <a className='relative flex items-center justify-center px-8 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200'>
            Add to bag
            <span className='sr-only'>, {product.name}</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default RelatedProduct;
