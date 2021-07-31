import { createContext, useReducer, useEffect, useContext } from 'react';
import { Cart } from '@chec/commerce.js/types/cart';
import commerce from 'lib/commerce';
import toast from 'react-hot-toast';

const CartStateContext = createContext<Cart>(null);
const CartDispatchContext = createContext<{
  reset: () => void;
  setCart: (payload: Cart) => void;
}>(null);

const SET_CART = 'SET_CART';
const RESET = 'RESET';

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload };
    case RESET:
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    try {
      const cart = await commerce.cart.retrieve();

      dispatch({ type: SET_CART, payload: cart });
    } catch (err) {
      toast.error('Could not get cart');
      console.error(err);
    }
  };

  const setCart = async (payload: Cart) =>
    dispatch({ type: SET_CART, payload });

  const reset = async () => dispatch({ type: RESET });

  return (
    <CartDispatchContext.Provider value={{ setCart, reset }}>
      <CartStateContext.Provider value={{ ...state }}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
