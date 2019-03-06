import React, { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Sort from '../Sort/Sort';
import Loader from '../Loader/Loader';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';

class ProductView extends Component {
  state = {
    searchQuery: '',
    sort: '',
  };
  AddItemToCart = (item, a) => {
    this.props.dispatch(actions.addItem(item));
  };
  SearchItem = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };
  updateData = value => {
    this.setState({ sort: value });
  };
  componentDidMount() {
    this.props.dispatch(actions.getProducts());
  }
  render() {
    const { products, productsLoading, productsError } = this.props;

    const { searchQuery, sort } = this.state;

    if (productsLoading) {
      return <Loader />;
    }

    if (productsError) {
      return <div>{productsError}</div>;
    }

    return (
      <div>
        <Sort updateData={this.updateData} SearchItem={this.SearchItem} />

        <div className="container">
          {products
            .filter(item =>
              item.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort(
              sort === 'age'
                ? (a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0)
                : (a, b) => a.age - b.age
            )
            .map(({ age, id, name, snippet, imageUrl, inCart }, item) => (
              <ProductItem
                key={id}
                img={`https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/${imageUrl}`}
                title={name}
                snippet={snippet}
                id={id}
                AddItemToCart={this.AddItemToCart}
                item={products[item]}
                inCart={this.inCart}
                added={inCart}
              />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { cart, products, productsLoading, productsError } = state;

  return {
    cart,
    products,
    productsLoading,
    productsError,
  };
};
export default connect(mapStateToProps)(ProductView);
