import React, { Component } from "react";
import Product from "./Product";
import uuid from "uuid/v4";
import "./Product.css";

class ProductList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.products.map(product => (
          <ul>
            <li className="li-style">
              <Product
                product={product}
                key={uuid()}
                addToCart={this.props.addToCart}
                removeFromCart={this.props.removeFromCart}
              />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default ProductList;
