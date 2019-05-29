import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import Cart from "../component/Cart";

class CartContainer extends Component {
  render() {
    return <Cart {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addToCart, removeFromCart }
);

export default connectedComponent(CartContainer);
