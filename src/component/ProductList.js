import React, { Component } from "react";
import Product from "./Product";
import uuid from "uuid/v4";
import "./Product.css";
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    return (
      <div>
      <Link to={'/cart'}><h3>Cart</h3></Link>

        {this.props.products.map(product => (
          <ul>
          <li className="li-style">
              <Product
                product={product}
                key={uuid()}
                addToCart={this.props.addToCart}
                removeFromCart={this.props.removeFromCart}
              />
              <Link to={`/products/${product.name}`}><h3>Details</h3></Link>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default ProductList;
