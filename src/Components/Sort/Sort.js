import React, { Component } from 'react';

export default class Sort extends Component {
  state = {
    value: 'age',
  };
  sortChange = e => {
    this.setState({
      value: e.target.value,
    });
    this.props.updateData(this.state.value);
  };
  render() {
    const { SearchItem, searchQuery } = this.props;
    return (
      <div className="sort">
        <form>
          <input
            placeholder="I am looking for"
            value={searchQuery}
            onChange={SearchItem}
            id="search"
            type="text"
            className="sort__field"
          />
          <select
            onChange={this.sortChange}
            id="select"
            className="sort__select"
          >
            <option value="age">Newest</option>
            <option value="alphabetical">Alphabetical</option>
          </select>
        </form>
      </div>
    );
  }
}
