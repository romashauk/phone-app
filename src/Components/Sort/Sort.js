import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as itemsOperations from '../Redux/action';

class Sort extends Component {
  state = {
    value: 'age',
  };
  SearchItem = e => {
    this.props.dispatch(itemsOperations.SearchItem(e.target.value));
  };
  SortByAge = () => {
    console.log('as');
    this.props.dispatch(itemsOperations.SortByAge());
  };
  SortByAlphabetical = () => {
    this.props.dispatch(itemsOperations.SortByAlphabetical());
  };
  sortChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="sort">
        <form>
          <label for="search">
            Search:
            <input onChange={this.SearchItem} id="search" type="text" />
          </label>
          <label for="select">
            Sort By:
            <select
              value={value}
              onClick={
                value === 'age' ? this.SortByAge : this.SortByAlphabetical
              }
              onChange={this.sortChange}
              id="select"
            >
              <option value="age">Newest</option>
              <option value="alphabetical" selected>
                Alphabetical
              </option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(mapStateToProps)(Sort);
