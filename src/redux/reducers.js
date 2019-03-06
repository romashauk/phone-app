import initialState from './initialState';

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.id],
      };

    default:
      return state;
  }
};
export default reducers;
