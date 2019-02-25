import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="tel:380633519858">
        <i className="header__logo fas fa-phone" />
      </a>
      <div className="header__cart">
        <Link to="/cart">
          <button className="header__btn">
            <i className="fas fa-shopping-cart" />
          </button>
        </Link>
      </div>
    </header>
  );
}
