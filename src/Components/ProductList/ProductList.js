import React, { Component, Fragment } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
class ProductView extends Component {
  render() {
    const { filter } = this.props;
    return (
      <Fragment>
        <Header />
        <Sort />
        <div className="container">
          {filter.map(({ age, id, name, snippet, imageUrl }) => (
            <ProductItem
              key={id}
              img={imageUrl}
              title={name}
              snippet={snippet}
              //}
            />
          ))}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
  filter: state.filter,
});

export default connect(mapStateToProps)(ProductView);
