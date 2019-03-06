import React, { Component } from 'react';
import Loader from '../Loader/Loader';
import ProductDetails from '../ProductDetails/ProductDetails';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';

const ImgUrl =
  'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';

class ProductList extends Component {
  state = {
    mainImg: '',
  };
  changeImg = item => {
    this.setState({
      mainImg: ImgUrl + item,
    });
  };
  componentDidMount() {
    const productId = this.props.match.params.id;
    this.props.dispatch(actions.getProductDetails(productId));
  }
  render() {
    const { productDetails, productsLoading } = this.props;
    const { mainImg } = this.state;
    if (!productDetails || productsLoading) {
      return <Loader />;
    }
    if (productDetails) {
      return (
        <ProductDetails
          {...productDetails}
          mainImg={mainImg || ImgUrl + productDetails.images[0]}
          changeImg={this.changeImg}
        />
      );
    }
  }
}
const mapStateToProps = state => {
  const { cart, productDetails, productsLoading, productsError } = state;

  return {
    cart,
    productDetails,
    productsLoading,
    productsError,
  };
};
export default connect(mapStateToProps)(ProductList);
