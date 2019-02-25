import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ProductItem extends Component {
  render() {
    const { img, title, snippet, id } = this.props;
    return (
      <div className="item">
        <h2 className="item__title">{title}</h2>
        <Link className="link" to={id}>
          <img className="item__img" src={img} alt="item" />
        </Link>
        <h3 className="item__snippet">{snippet}</h3>
      </div>
    );
  }
}
