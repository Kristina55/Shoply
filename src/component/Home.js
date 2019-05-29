import React, { Component } from "react";
import ProductListContainer from "../container/ProductListContainer";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <ProductListContainer />
      </div>
    );
  }
}

export default Home;
