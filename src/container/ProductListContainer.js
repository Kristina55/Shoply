import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import ProductList from "../component/ProductList";

class ProductListContainer extends Component {
  render() {
    return <ProductList {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    products: state.productsList
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { addToCart, removeFromCart }
);

export default connectedComponent(ProductListContainer);
