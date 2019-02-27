import React, { Component } from 'react';

export default class ProductDetails extends Component {
  render() {
    const data = this.props;
    console.log(data);
    const ImgUrl =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/';
    return (
      <div className="details">
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
                    className=" item__Image"
                    onClick={() => data.changeImg(item)}
                    src={ImgUrl + item}
                    alt="img"
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="row">
          <div className="main__container">
            <h2>Avability and Networks</h2>
            <h3>Avability</h3>
            <ul>
              {data.availability.map(item => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          </div>
          <div className="main__container">
            <h2>Battery</h2>
            <h3>Type</h3>
            <p>{data.battery.type}</p>
            <h3>Talktime</h3>
            <p>{data.battery.talkTime}</p>
            <h3>Standby time (max)</h3>
            <p>{data.battery.standbyTime}</p>
          </div>
          <div className="main__container">
            <h2>Storage and Memory</h2>
            <h3>RAM</h3>
            <p>{data.storage.ram}</p>
            <h3>Internal Storage</h3>
            <p>{data.storage.flash}</p>
          </div>
          <div className="main__container">
            <h2>Connectivity</h2>
            <h3>Network Support</h3>
            <p>{data.connectivity.cell}</p>
            <h3>WiFi</h3>
            <p>{data.connectivity.wifi}</p>
            <h3>Bluetooth</h3>
            <p>{data.connectivity.bluetooth}</p>
            <h3>Infared</h3>
            <p>
              {data.connectivity.infrared ? (
                <i className="fas fa-check" />
              ) : (
                <i className="fas fa-times" />
              )}
            </p>

            <h3>GPS</h3>
            <p>
              {data.connectivity.gps ? (
                <i className="fas fa-check" />
              ) : (
                <i className="fas fa-times" />
              )}
            </p>
          </div>
          <div className="main__container">
            <h2>Android</h2>
            <h3>OS Version</h3>
            <p>{data.android.os}</p>
            <h3>UI</h3>
            <p>{data.android.ui}</p>
          </div>
          <div className="main__container">
            <h2>Size and Weight</h2>
            <h3>Dimensions</h3>
            {data.sizeAndWeight.dimensions.map(item => {
              return <p key={item}>{item}</p>;
            })}
            <h3>Weight</h3>
            <p>{data.sizeAndWeight.weight}</p>
          </div>
        </div>
        <div className="row">
          <div className="main__container">
            <h2>Display</h2>
            <h3>Screen Size</h3>
            <p>{data.display.screenSize}</p>
            <h3>Screen Resolution</h3>
            <p>{data.display.screenResolution}</p>
            <h3>Touch screen</h3>
            {data.display.touchScreen ? (
              <i className="fas fa-check" />
            ) : (
              <i className="fas fa-times" />
            )}
          </div>
          <div className="main__container">
            <h2>Hardware</h2>
            <h3>CPU</h3>
            <p>{data.hardware.cpu}</p>
            <h3>USB</h3>
            <p>{data.hardware.usb}</p>
            <h3>Audio / headphone jack</h3>
            <p>{data.hardware.audioJack}</p>
            <h3>FM Radio</h3>
            {data.hardware.fmRadio ? (
              <i className="fas fa-check" />
            ) : (
              <i className="fas fa-times" />
            )}
            <h3>FM Radio</h3>
            {data.hardware.Accelerometer ? (
              <i className="fas fa-check" />
            ) : (
              <i className="fas fa-times" />
            )}
          </div>
          <div className="main__container">
            <h2>Camera</h2>
            <h3>Primary</h3>
            <p>{data.camera.primary}</p>
            <h3>Features</h3>
            {data.camera.features.map(item => {
              return <p key={item}>{item}</p>;
            })}
          </div>
          <div className="main__container">
            <h2>Additional Features</h2>
            <p>{data.additionalFeatures}</p>
          </div>
        </div>
      </div>
    );
  }
}
