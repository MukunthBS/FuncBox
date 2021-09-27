import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Luck extends Component {
  render() {
    return (
      <div class="luck">
        <img class="luck-img" src="icons/box2.png" />
        <span class="luck-txt">
          {" "}
          Searching for a one-time gift or corporate?{" "}
          <span>You're in luck »</span>
        </span>
      </div>
    );
  }
}

export default Luck;
