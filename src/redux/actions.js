export function addItem(item) {
  return {
    type: 'ADD_ITEM',
    item,
  };
}
export function removeItem(id) {
  return {
    type: 'REMOVE_ITEM',
    id,
  };
}

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';
export const GET_DETAILS_SUCCESS = 'GET_DETAILS_SUCCESS';

export function getProducts() {
  const productsUrl =
    'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/phones.json';
  return dispatch => {
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
  };
}

export function getProductDetails(id) {
  const baseUrl =
    'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/';

  const dataUrl = `${baseUrl}/${id}.json`;
  return dispatch => {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    fetch(dataUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load products');
        }

        return response.json();
      })
      .then(dataJson => {
        dispatch({
          type: GET_DETAILS_SUCCESS,
          productDetails: dataJson,
        });
      })
      .catch(error => {
        dispatch({
          type: GET_PRODUCTS_FAILURE,
          error: error.message,
        });
      });
  };
}
