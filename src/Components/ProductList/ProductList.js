import React, { Component, Fragment } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Sort from '../Sort/Sort';
import Loader from '../Loader/Loader';
import * as todoActions from '../Redux/actions';
import { connect } from 'react-redux';

class ProductView extends Component {
  state = {
    items: null,
    searchQuery: '',
    sort: '',
    error: '',
  };
  AddItemToCart = id => {
    this.props.dispatch(todoActions.AddItem(id));
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
    const dataUrl =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/phones.json';

    fetch(dataUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load data');
        }

        return response.json();
      })
      .then(dataJson => {
        this.setState({ items: dataJson });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
  render() {
    const { items, searchQuery, sort } = this.state;

    if (!items) {
      return <Loader />;
    }
    if (items) {
      return (
        <Fragment>
          {items && (
            <div>
              <Sort updateData={this.updateData} SearchItem={this.SearchItem} />

              <div className="container">
                {items
                  .filter(item =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .sort(
                    sort === 'age'
                      ? (a, b) =>
                          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
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
                      item={items[item]}
                      inCart={this.inCart}
                      added={inCart}
                    />
                  ))}
              </div>
            </div>
          )}
        </Fragment>
      );
    }
  }
}
const mapStateToProps = state => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(ProductView);
