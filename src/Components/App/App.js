import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './App.css';
import Product from '../Product';
import ProductList from '../ProductList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/smt:view" component={Product} />
        </Switch>
      </div>
    );
  }
}

export default App;
