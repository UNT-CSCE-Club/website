import { Product as ProductType } from '@chec/commerce.js/types/product';
import useProduct from './useProduct';
import {
  ProductImages,
  VariantPicker,
  RelatedProducts,
} from '@/merch/products';

interface Props {
  product: ProductType;
}

const Product = ({ product }: Props) => {
  const {
    images,
    variantGroups,
    initialVariants,
    handleVariantChange,
    addToCart,
    relatedProducts,
  } = useProduct(product);

  return (
    <>
      <h1 className='text-4xl'>{product.name}</h1>
      <div
        className='mt-2 md:leading-relaxed lg:leading-loose lg:text-lg'
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
      <ProductImages images={images} />
      <p>{product.price.formatted_with_symbol}</p>
      <VariantPicker
        variantGroups={variantGroups}
        defaultValues={initialVariants}
        onChange={handleVariantChange}
      />
      <button type='button' onClick={addToCart}>
        Add to Bag
      </button>
      <hr className='my-6 text-gray-400' />
      <RelatedProducts products={relatedProducts} />
    </>
  );
};

export default Product;
