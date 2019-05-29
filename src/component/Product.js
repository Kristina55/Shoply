import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart() {
    this.props.addToCart(this.props.product);
  }
  removeFromCart() {
    this.props.removeFromCart(this.props.product);
  }
  render() {
    return (
      <div>
        <h1>{this.props.product.name}</h1>
        <img
          className="img-style"
          src={this.props.product.image_url}
          alt="product"
        />
        <p>{this.props.product.description}</p>

        <button onClick={this.addToCart}>Add Item</button>
        <button onClick={this.removeFromCart}>Remove Item</button>
      </div>
    );
  }
}

export default Product;
