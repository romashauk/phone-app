import React, { Component, Fragment } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Header from '../Header/Header';
import Sort from '../Sort/Sort';
import Loader from '../Loader/Loader';

export default class ProductView extends Component {
  state = {
    items: null,
    searchQuery: '',
    sort: '',
    error: '',
  };
  SearchItem = e => {
    this.setState({
      searchQuery: e.target.value,
    });
  };
  updateData = value => {
    this.setState({ sort: value });
  };
  componentDidMount() {
    const dataUrl =
      'https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/phones/phones.json';

    fetch(dataUrl)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load data');
        }

        return response.json();
      })
      .then(dataJson => {
        this.setState({ items: dataJson });
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  }
  render() {
    const { items, searchQuery, sort } = this.state;
    if (!items) {
      return <Loader />;
    }
    if (items) {
      return (
        <Fragment>
          {items && (
            <div>
              <Header />
              <Sort updateData={this.updateData} SearchItem={this.SearchItem} />

              <div className="container">
                {items
                  .filter(item =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .sort(
                    sort === 'age'
                      ? (a, b) =>
                          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                      : (a, b) => a.age - b.age
                  )
                  .map(({ age, id, name, snippet, imageUrl }) => (
                    <ProductItem
                      key={id}
                      img={imageUrl}
                      title={name}
                      snippet={snippet}
                      id={id}
                    />
                  ))}
              </div>
            </div>
          )}
        </Fragment>
      );
    }
  }
}
