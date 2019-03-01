import axios from 'axios';
export function addItem(id){
  return {
    type: 'ADD_ITEM',
    id,
  };
}

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

const productsUrl = 'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/phones.json';

export function getProducts() {
  return (dispatch) => {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    fetch(productsUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load products');
        }

        return response.json();
      })
      .then(dataJson => {
        dispatch({
          type: GET_PRODUCTS_SUCCESS,
          products: dataJson,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_PRODUCTS_FAILURE,
          error: error.message,
        });
      });
  }
}
