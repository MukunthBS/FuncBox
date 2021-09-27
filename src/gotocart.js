import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class GoToCart extends Component {
  render() {
    return (
      <div>
        <a href="cart">
          <button class="cart">
            <img class="button-img" src="icons/cart.png" />
            <span class="button-txt">Go To Cart</span>
          </button>
        </a>
      </div>
    );
  }
}

export default GoToCart;
