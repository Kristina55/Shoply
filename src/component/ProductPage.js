import React, { Component } from 'react';
import './Product.css'
import { Link } from 'react-router-dom';

export default class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart() {
    let item = this.props.products.find(item => this.props.match.params.name === item.name);
    this.props.addToCart(item);
  }
  removeFromCart() {
    let item = this.props.products.find(item => this.props.match.params.name === item.name);
    this.props.removeFromCart(item);
  }
  
  render() {
    console.log(this.props);
    let item = this.props.products.find(item => this.props.match.params.name === item.name);
    return (
      <div>
        <Link to={'/cart'}><h3>Cart</h3></Link>

        <h1>{item.name}</h1>
        <img className='img-style' src={item.image_url} alt='product' />
        <h3>{item.description}</h3>
        <p>{item.price}</p>
        <button onClick={this.addToCart}>Add Item</button>
        <button onClick={this.removeFromCart}>Remove Item</button>

      </div>
    )
  }
}
