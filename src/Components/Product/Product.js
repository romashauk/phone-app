import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import ProductDetails from '../ProductDetails/ProductDetails';

export default class ProductList extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    const baseUrl =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/';
    const productId = this.props.match.params.id;
    const dataUrl = `${baseUrl}/${productId}.json`;

    fetch(dataUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load data');
        }

        return response.json();
      })
      .then(dataJson => {
        this.setState({ data: dataJson });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
  render() {
    const { data } = this.state;
    if (!data) {
      return <Loader />;
    }
    if (data) {
      return <ProductDetails {...data} />;
    }
  }
}
