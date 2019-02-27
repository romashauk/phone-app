import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import ProductDetails from '../ProductDetails/ProductDetails';

export default class ProductList extends Component {
  state = {
    data: null,
    mainImg: '',
  };
  componentDidMount() {
    const baseUrl =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/';
    const ImgUrl =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
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
        this.setState({ data: dataJson, mainImg: ImgUrl + dataJson.images[0] });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
  changeImg = item => {
    const ImgUrl =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
    this.setState({
      mainImg: ImgUrl + item,
    });
    console.log(item);
    console.log(this.state.mainImg);
  };
  render() {
    const { data, mainImg } = this.state;
    if (!data) {
      return <Loader />;
    }
    if (data) {
      return (
        <ProductDetails
          {...data}
          mainImg={mainImg}
          changeImg={this.changeImg}
        />
      );
    }
  }
}
