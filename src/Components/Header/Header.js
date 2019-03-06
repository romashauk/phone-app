import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <a className="header__logo" href="tel:380633519858">
            <i className="header__logo fas fa-phone" />
          </a>
          <div className="header__cart">
            <Link to="/cart">
              <button className="header__btn">
                <i className="fas fa-shopping-cart" />
                <div className="counter">{this.props.cart.length}</div>
              </button>
            </Link>
          </div>
        </header>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { cart } = state;

  return {
    cart,
  };
};
export default connect(mapStateToProps)(Header);
