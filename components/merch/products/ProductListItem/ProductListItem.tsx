import Link from 'next/link';
import { Product } from '@chec/commerce.js/types/product';

interface Props {
  product: Product;
}

const ProductListItem = ({ product }: Props) => {
  if (!product) {
    return null;
  }

  return (
    <li>
      <Link href={`/merch/products/${product.permalink}`}>
        <a className='group'>
          <div className='w-full overflow-hidden bg-gray-100 rounded-lg aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8'>
            {product.has.images && product?.assets[0]?.is_image ? (
              <img
                src={product.assets[0].url}
                width={product.assets[0].image_dimensions.width}
                height={product.assets[0].image_dimensions.height}
                alt={product?.assets[0]?.description || `${product.name} image`}
                className='object-contain object-center w-full h-full group-hover:opacity-75'
              />
            ) : null}
          </div>
          <h3 className='mt-4 text-sm text-gray-700'>{product.name}</h3>
          <p className='mt-1 text-lg font-medium text-gray-900'>
            {product.price.formatted_with_symbol}
          </p>
        </a>
      </Link>
    </li>
  );
};

export default ProductListItem;
