import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../../redux/actions';
import CartItem from './CartItem';

class Cart extends Component {
  removeItem = id => {
    this.props.dispatch(actions.removeItem(id));
  };

  render() {
    const { cart } = this.props;
    return (
      <div className="container">
        <Link to="/" className="details__btn">
          <button>Back To Products</button>
        </Link>
        {cart.length === 0 ? (
          <h1 className="empty_cart">Your cart is empty</h1>
        ) : (
          <ul className="phones">
            {cart.map((item, i) => {
              return <CartItem item={item} key={i} remove={this.removeItem} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Cart);
