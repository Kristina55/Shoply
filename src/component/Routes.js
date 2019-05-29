import React, { Component } from 'react';
import Home from './Home';
import CartContainer from '../container/CartContainer';
import ProductPageContainer from '../container/ProductPageContainer';
import { Route, Switch } from 'react-router-dom';


export default class Routes extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/products/:name"
          render={routerProps => <ProductPageContainer {...routerProps} />} />

        <Route exact path="/cart"
          render={routerProps => <CartContainer {...routerProps} />} />
          
        <Route exact path="/"
          render={routerProps => <Home {...routerProps} />} />


      </Switch>
    )
  }
}

