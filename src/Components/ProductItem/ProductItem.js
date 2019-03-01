import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ProductItem extends Component {
  render() {
    const { img, title, snippet, id, AddItemToCart, added } = this.props;
    return (
      <div className="item">
        <h2 className="item__title">{title}</h2>

        <img className="item__img" src={img} alt="item" />

        <h3 className="item__snippet">{snippet}</h3>
        <div className="item__buttons ">
          {!added ? (
            <button
              className="item__btn left"
              onClick={() => {
                AddItemToCart(id);
              }}
            >
              Add
              <i className="fas fa-cart-plus" />
            </button>
          ) : (
            <button className="item__btn disabled left">
              In Cart
              <i className="fas fa-check" />
            </button>
          )}
          <Link className="link" to={id}>
            <button className="item__btn right">
              View Details
              <i className="fas fa-info" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(ProductItem);
