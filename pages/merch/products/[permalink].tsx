import { GetStaticPaths, GetStaticProps } from 'next';
import { Product } from '@chec/commerce.js/types/product';
import commerce from 'lib/commerce';
import { useCartDispatch } from 'context/cart';
import React, { useEffect, useMemo, useState } from 'react';
import {
  ProductAttributes,
  ProductImages,
  RelatedProducts,
  VariantPicker,
} from '@/merch/products';

interface ProductPageProps {
  product: Product;
}

const ProductPage = ({ product }: ProductPageProps) => {
  const { setCart } = useCartDispatch();
  const {
    variant_groups: variantGroups,
    assets,
    meta,
    related_products: relatedProducts,
  } = product;
  const images = assets.filter(({ is_image }) => is_image);

  const initialVariants = useMemo(
    () =>
      variantGroups.reduce((all, { id, options }) => {
        const [firstOption] = options;

        return { ...all, [id]: firstOption.id };
      }, {}),
    [product.permalink]
  );

  const [selectedVariants, setSelectedVariants] = useState(initialVariants);

  useEffect(() => {
    setSelectedVariants(initialVariants);
  }, [product.permalink]);

  const handleVariantChange = ({ target: { id, value } }) =>
    setSelectedVariants({
      ...selectedVariants,
      [id]: value,
    });

  const addToCart = () =>
    commerce.cart
      .add(product.id, 1, selectedVariants)
      .then(({ cart }) => {
        setCart(cart);

        return cart;
      })
      .then(({ subtotal }) =>
        // toast(
        //   `${product.name} is now in your cart. Your subtotal is now ${subtotal.formatted_with_symbol}. Click to view what's in your cart.`,
        //   {
        //     onClick: openModal,
        //   }
        // )
        console.log(
          `${product.name} is now in your cart. Your subtotal is now ${subtotal.formatted_with_symbol}. Click to view what's in your cart.`
        )
      )
      .catch(() => {
        // toast('Please try again.');
        console.log('Error adding to cartPlease try again.');
      });

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
      <ProductAttributes {...meta} />
      <hr className='my-6 text-gray-400' />
      <RelatedProducts products={relatedProducts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink as string, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map(product => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
};

export default ProductPage;
