import { useMemo, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { Product } from '@chec/commerce.js/types/product';
import { useCartDispatch } from 'context/cart';
import commerce from 'lib/commerce';
import { AddToCartToast } from 'components/ui';

const useProduct = (product: Product) => {
  const {
    variant_groups: variantGroups,
    assets,
    related_products: relatedProducts,
  } = product;

  const images = assets.filter(({ is_image }) => is_image);

  const { setCart } = useCartDispatch();

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
        toast.custom(
          t => <AddToCartToast t={t} product={product} subTotal={subtotal} />,
          { duration: 5000 }
        )
      )
      .catch(e => {
        toast.error('Could not add item to cart');
        console.error(e);
      });

  return {
    images,
    variantGroups,
    initialVariants,
    handleVariantChange,
    addToCart,
    relatedProducts,
  };
};

export default useProduct;
