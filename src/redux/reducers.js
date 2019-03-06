import initialState from './initialState';
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_DETAILS_SUCCESS,
} from './actions';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter(p => p.id !== action.id),
      };
    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        productsLoading: true,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
        productsLoading: false,
      };

    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        productsLoading: false,
        productsError: action.error,
      };
    case GET_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.productDetails,
        productsLoading: false,
      };
    default:
      return state;
  }
};
export default reducers;
