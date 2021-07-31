import Image from 'next/image';
import Link from 'next/link';
import { classNames } from 'lib/utils/classNames';
import { RelatedProductType } from 'types';

interface Props {
  product: RelatedProductType;
  className?: string;
}

const RelatedProduct = ({
  product: { media, name, permalink, price },
  className,
}: Props) => {
  const imageClass = classNames(
    'relative rounded-lg hover:rounded-none overflow-hidden w-full transition-all',
    className
  );

  return (
    <Link href={`/merch/products/${permalink}`}>
      <a className='relative w-56 group'>
        {media?.source && (
          <div className={imageClass}>
            <Image
              src={media.source}
              alt={RelatedProduct.name}
              layout='fill'
              sizes='616px, (min-width: 768px): 352px, (min-width: 1024px): 232px, (min-width: 1280px): 288px'
              className='object-cover'
              priority={true}
            />
          </div>
        )}
        <div className='flex justify-between py-2 space-x-1 md:py-3'>
          <span className='text-sm md:text-base lg:text-lg'>{name}</span>
          <span className='text-sm md:text-base lg:text-lg'>
            {price.formatted_with_symbol}
          </span>
        </div>
      </a>
    </Link>
  );
};

export default RelatedProduct;
