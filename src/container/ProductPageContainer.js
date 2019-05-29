import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions";
import ProductPage from "../component/ProductPage";

class ProductPageContainer extends Component {
  render() {
    return <ProductPage {...this.props} />;
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

export default connectedComponent(ProductPageContainer);
