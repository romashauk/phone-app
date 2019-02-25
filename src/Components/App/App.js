import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import Product from '../Product';
import ProductList from '../ProductList';
import Cart from '../Cart/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/:id" component={Product} />
        </Switch>
      </div>
    );
  }
}

export default App;
