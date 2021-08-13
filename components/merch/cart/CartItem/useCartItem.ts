import { Cart } from '@chec/commerce.js/types/cart';
import { LineItem } from '@chec/commerce.js/types/line-item';
import { useCartDispatch } from 'context/cart';
import commerce from 'lib/commerce';

const useCartItem = (item: LineItem) => {
  const { id, name, quantity, selected_options } = item;
  const hasVariants = selected_options.length >= 1;
  const { setCart, setIsOpen } = useCartDispatch();

  const handleUpdateCart = ({ cart }: { cart: Cart }): Cart => {
    setCart(cart);

    return cart;
  };

  const handleRemoveItem = () =>
    commerce.cart
      .remove(id)
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        console.log(
          `${name} has been removed from your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
        )
      );

  const decrementQuantity = () => {
    quantity > 1
      ? commerce.cart
          .update(id, { quantity: quantity - 1 })
          .then(handleUpdateCart)
          .then(({ subtotal }) =>
            console.log(
              `1 "${name}" has been removed from your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
            )
          )
      : handleRemoveItem();
  };

  const incrementQuantity = () =>
    commerce.cart
      .update(id, { quantity: quantity + 1 })
      .then(handleUpdateCart)
      .then(({ subtotal }) =>
        console.log(
          `Another "${name}" has been added to your cart. Your new subtotal is now ${subtotal.formatted_with_symbol}`
        )
      );

  return {
    hasVariants,
    handleRemoveItem,
    decrementQuantity,
    incrementQuantity,
    setIsOpen,
  };
};

export default useCartItem;
