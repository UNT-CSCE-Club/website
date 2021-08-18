import { createContext, useReducer, useEffect, useContext } from 'react';
import { Cart as CommerceCart } from '@chec/commerce.js/types/cart';
import commerce from 'lib/commerce';
import toast from 'react-hot-toast';

interface Cart extends CommerceCart {
  isOpen: boolean;
  isCartLoading: boolean;
}

const CartStateContext = createContext<Cart>(null);
const CartDispatchContext = createContext<{
  reset: () => void;
  setCart: (payload: CommerceCart) => void;
  setIsOpen: (payload: boolean) => void;
}>(null);

const SET_CART = 'SET_CART';
const SET_IS_OPEN = 'SET_IS_OPEN';
const SET_IS_CART_LOADING = 'SET_IS_CART_LOADING';
const RESET = 'RESET';

const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: [],
  isOpen: false,
  isCartLoading: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return { ...state, ...action.payload };
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    case SET_IS_CART_LOADING:
      return {
        ...state,
        isCartLoading: action.payload,
      };
    case RESET:
      return { ...initialState, isOpen: state.isOpen };
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
    setIsCartLoading(true);
    try {
      const cart = await commerce.cart.retrieve();

      dispatch({ type: SET_CART, payload: cart });
    } catch (err) {
      toast.error('Could not get cart');
      console.error(err);
    } finally {
      setIsCartLoading(false);
    }
  };

  const setCart = async (payload: Cart) =>
    dispatch({ type: SET_CART, payload });

  const setIsOpen = (payload: boolean) =>
    dispatch({ type: SET_IS_OPEN, payload });

  const setIsCartLoading = (payload: boolean) =>
    dispatch({ type: SET_IS_CART_LOADING, payload });

  const reset = async () => dispatch({ type: RESET });

  return (
    <CartDispatchContext.Provider value={{ setCart, setIsOpen, reset }}>
      <CartStateContext.Provider value={{ ...state }}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
