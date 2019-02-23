import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ProductItem extends Component {
  render() {
    const { img, title, snippet } = this.props;
    return (
      <Link className="link" to="/view">
        <div className="item">
          <h2 className="item__title">{title}</h2>
          <img className="item__img" src={img} alt="item" />
          <h3 className="item__snippet">{snippet}</h3>
        </div>
      </Link>
    );
  }
}
