import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const titles = {
  additionalFeatures: 'Additional Features',
  android: 'Android',
  availability: 'Availability and Networks',
  battery: 'Battery',
  camera: 'Camera',
  connectivity: 'Connectivity',
  display: 'Display',
  hardware: 'Hardware',
  sizeAndWeight: 'Size and Weight',
  storage: 'Storage and Memory',
};

const keysToSkip = [
  'id',
  'images',
  'name',
  'description',
  'mainImg',
  'changeImg',
];

export default class ProductDetails extends Component {
  renderFeatureData(key, data) {
    let contents = null;

    if (keysToSkip.includes(key)) {
      return null;
    }

    if (typeof data === 'string' || typeof data === 'number') {
      contents = data;
    } else if (Array.isArray(data)) {
      contents = data.join(', ');
    } else if (typeof data === 'object' && data) {
      contents = Object.keys(data).map(subKey =>
        this.renderFeatureData(subKey, data[subKey])
      );
    } else if (typeof data === 'boolean') {
      contents = data ? '✓' : '✘';
    }

    return !key ? (
      contents
    ) : (
      <div key={key} className="feature-data">
        <h3>{titles[key] || key}</h3>
        <div>{contents}</div>
      </div>
    );
  }
  render() {
    const data = this.props;
    const ImgUrl =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
    return (
      <div className="details">
        <Link to="/" className="details__btn">
          <button>Back To Products</button>
        </Link>

        <div className="img">
          <img className="details__img" src={data.mainImg} alt="item" />
        </div>

        <div className="flex">
          <h1 className="details__name">{data.name}</h1>
          <p className="details__description">{data.description}</p>
          <ul className="details__list">
            {data.images.map(item => {
              return (
                <li
                  className={
                    data.mainImg === ImgUrl + item
                      ? 'img__container active'
                      : 'img__container'
                  }
                  key={item}
                >
                  <img
                    className="y item__Image"
                    onClick={() => data.changeImg(item)}
                    src={ImgUrl + item}
                    alt="img"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="row">{this.renderFeatureData(null, data)}</div>
      </div>
    );
  }
}
