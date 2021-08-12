import { Product } from '@chec/commerce.js/types/product';
import { ProductListItem } from '@/merch/products';
import { classNames } from 'lib/utils/classNames';

interface ProductListProps {
  products: Product[];
  large?: boolean;
}

const ProductList = ({ products, large }: ProductListProps) => {
  if (!products) return null;

  return (
    <ul
      className={classNames(
        'grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6',
        large
          ? 'lg:gap-x-8 xl:grid-cols-3'
          : 'lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'
      )}
    >
      {products.map(product => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
