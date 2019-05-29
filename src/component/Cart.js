import React, { Component } from 'react'

export default class Cart extends Component {

  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart() {
    let item = this.props.cart.find(item => this.props.match.params.name === item.name);
    this.props.addToCart(item);
  }
  removeFromCart() {
    let item = this.props.cart.find(item => this.props.match.params.name === item.name);
    this.props.removeFromCart(item);
  }



  render() {
    console.log(this.props);

    function mapItems(items) {
      let cartArr = [];
      let cartObj = {};
      items.forEach((item) =>
        cartArr.push(item.name)
      )
      for (let i = 0; i < cartArr.length; i++) {
        if (!cartObj[cartArr[i]]) {
          cartObj[cartArr[i]] = 1;
        } else {
          cartObj[cartArr[i]]++;
        }
      }
      return cartObj;

    }
    let cart = Object.entries(mapItems(this.props.cart));
    console.log(cart);

    return (
      <div>
        <h3>Cart Total:</h3>
        {cart.map(item => (
          <div>
            <h2>{item[0]}</h2>
            <p>Quantity:{item[1]}</p>
            <button onClick={this.addToCart}>Add Quantity</button>
            <button onClick={this.removeFromCart}>Remove From Cart</button>

          </div>
        ))}
      </div>
    )
  }
}

