import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Perks extends Component {
  render() {
    return (
      <div class="perks">
        <img class="perks-img" src="icons/shipping.png" />
        <span class="perks-txt">Free shipping</span>
        <img class="perks-img" src="icons/new.png" />
        <span class="perks-txt">No experience necessary</span>
        <img class="perks-img" src="icons/cancel.png" />
        <span class="perks-txt">Cancel Anytime</span>
      </div>
    );
  }
}

export default Perks;
