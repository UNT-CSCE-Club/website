import { createContext, useReducer, useContext } from 'react';

import commerce from 'lib/commerce';
import { useEffect } from 'react';

const CheckoutStateContext = createContext(null);
const CheckoutDispatchContext = createContext(null);

const SET_CURRENT_STEP = 'SET_CURRENT_STEP';
const SET_UNITED_STATES_SUBDIVISIONS = 'SET_UNITED_STATES_SUBDIVISIONS';
const SET_CHECKOUT = 'SET_CHECKOUT';
const SET_LIVE = 'SET_LIVE';
const SET_PROCESSING = 'SET_PROCESSING';
const SET_ERROR = 'SET_ERROR';
const RESET = 'RESET';

const initialState = {
  currentStep: 'extrafields',
  unitedStatesSubdivisions: [],
  processing: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case SET_UNITED_STATES_SUBDIVISIONS:
      return {
        ...state,
        unitedStatesSubdivisions: action.payload,
      };
    case SET_CHECKOUT:
      return {
        ...state,
        ...action.payload,
      };
    case SET_LIVE:
      return { ...state, live: { ...state.live, ...action.payload } };
    case SET_PROCESSING:
      return { ...state, processing: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case RESET:
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getUnitedStatesSubdivisions();
  }, []);

  const generateToken = async cartId => {
    if (!cartId) return;

    try {
      const payload = await commerce.checkout.generateToken(cartId, {
        type: 'cart',
      });

      dispatch({ type: SET_CHECKOUT, payload });
    } catch (err) {
      console.log('generateToken failed');
    }
  };

  const getUnitedStatesSubdivisions = async () => {
    try {
      const { subdivisions } = await commerce.services.localeListSubdivisions(
        'US'
      );

      const reducer = ([code, name]) => ({
        value: code,
        label: name,
      });

      const formattedSubdivisions = subdivisions
        ? Object.entries(subdivisions).map(reducer)
        : [];

      dispatch({
        type: SET_UNITED_STATES_SUBDIVISIONS,
        payload: formattedSubdivisions,
      });
    } catch (err) {
      console.log('getUnitedStatesSubdivisions failed');
    }
  };

  const setShippingMethod = async (shipping_option_id, country, region) => {
    try {
      const { live } = await commerce.checkout.checkShippingOption(state.id, {
        shipping_option_id,
        country,
        ...(region && { region }),
      });

      dispatch({ type: SET_LIVE, payload: live });
    } catch (err) {
      console.log('setShippingMethod failed');
    }
  };

  const setTax = async (
    region,
    postal_zip_code,
    setTaxError,
    clearTaxError
  ) => {
    clearTaxError('shipping.postal_zip_code');
    try {
      const { live, valid } = await commerce.checkout.setTaxZone(state.id, {
        country: 'US',
        region,
        postal_zip_code,
      });

      dispatch({ type: SET_LIVE, payload: live });

      clearTaxError('shipping.postal_zip_code');
    } catch (err) {
      setTaxError('shipping.postal_zip_code', {
        type: 'manual',
        message: err?.data?.error?.message || 'Invalid ZIP / Postcode',
      });
    }
  };

  const setCurrentStep = step =>
    dispatch({ type: SET_CURRENT_STEP, payload: step });

  const nextStepFrom = currentStep => {
    switch (currentStep) {
      case 'extrafields':
        return state.collects.shipping_address ? 'shipping' : 'billing';
      case 'shipping':
      default:
        return 'billing';
    }
  };

  const capture = values => commerce.checkout.capture(state.id, values);

  const setProcessing = payload => dispatch({ type: SET_PROCESSING, payload });

  const setError = payload => dispatch({ type: SET_ERROR, payload });

  const reset = () => dispatch({ type: RESET });

  return (
    <CheckoutDispatchContext.Provider
      value={{
        generateToken,
        setShippingMethod,
        setTax,
        setCurrentStep,
        nextStepFrom,
        capture,
        setProcessing,
        setError,
        reset,
      }}
    >
      <CheckoutStateContext.Provider value={state}>
        {children}
      </CheckoutStateContext.Provider>
    </CheckoutDispatchContext.Provider>
  );
};

export const useCheckoutState = () => useContext(CheckoutStateContext);
export const useCheckoutDispatch = () => useContext(CheckoutDispatchContext);
