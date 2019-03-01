import React, { Component } from 'react';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    const { cart } = this.props;

    return (
      <div>
        {cart.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          cart.map(item => {
            return (
              <div key={item} className="cartItem__container">
                <h1>{item}</h1>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  cart: state.cart,
});
export default connect(mapStateToProps)(Cart);
