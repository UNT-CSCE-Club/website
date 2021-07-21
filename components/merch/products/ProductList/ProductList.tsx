import React from 'react';
import Link from 'next/link';
import { Product } from '@chec/commerce.js/types/product';
import { ProductListItem } from '@/merch/products';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  if (!products) return null;

  return (
    <ul>
      {products.map(product => (
        <li key={product.permalink}>
          <Link href={`/merch/products/${product.permalink}`}>
            <a>
              <ProductListItem {...product} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
