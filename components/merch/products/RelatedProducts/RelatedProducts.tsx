import { RelatedProduct } from '@/merch/products';
import { RelatedProductType } from 'types';

interface Props {
  products: RelatedProductType[];
}

const RelatedProducts = ({ products }: Props) => {
  if (!products || products.length === 0) return null;

  return (
    <div>
      <h3 className='w-1/3 text-xl leading-tight md:w-full md:leading-normal md:text-3xl'>
        Some other things you might like
      </h3>

      <div className='grid w-full grid-cols-2 gap-4 pt-4 xl:grid-cols-4 md:gap-8 md:pt-8'>
        {products.map(product => (
          <RelatedProduct
            key={product.id}
            product={product}
            className='w-56 h-56'
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
