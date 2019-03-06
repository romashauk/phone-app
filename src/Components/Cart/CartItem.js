import React, { Component } from 'react';

export default class CartItem extends Component {
  render() {
    const { item, remove } = this.props;
    return (
      <li key={item.id} className="cartItem__container">
        <div className="img__wrapper">
          <img
            src={`https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/${
              item.imageUrl
            }`}
            alt="item"
          />
        </div>
        <div className="info__wrapper">
          <h2>{item.name}</h2>
          <p>{item.snippet}</p>
        </div>
        <div onClick={() => remove(item.id)} className="close__icon">
          <i className="fas fa-times" />
        </div>
      </li>
    );
  }
}
