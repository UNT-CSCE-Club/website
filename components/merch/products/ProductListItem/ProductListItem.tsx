import React from 'react';
import { Product } from '@chec/commerce.js/types/product';

const ProductListItem = ({ name, price }: Product) => {
  return (
    <p>
      {name}: {price.formatted_with_symbol}
    </p>
  );
};

export default ProductListItem;
