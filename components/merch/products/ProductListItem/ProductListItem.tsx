import { Product } from '@chec/commerce.js/types/product';

interface Props {
  product: Product;
}

const ProductListItem = ({ product: { name, price } }: Props) => {
  return (
    <p>
      {name}: {price.formatted_with_symbol}
    </p>
  );
};

export default ProductListItem;
