import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <img class="logo" src="icons/logo.png" />
          <p class="name">FuncBox</p>

          <nav>
            <ul class="nav_links">
              <li>
                <div class="nav-logo">
                  <img src="icons/home.png" />
                </div>
                <div class="nav-li">Home</div>
              </li>
              <li>
                <div class="nav-logo">
                  <img src="icons/about.png" />
                </div>
                <div class="nav-li">About</div>
              </li>
              <li>
                <div class="nav-logo">
                  <img src="icons/shop.png" />
                </div>
                <div class="nav-li">Shop</div>
              </li>
              <li>
                <div class="nav-logo">
                  <img src="icons/login.png" />
                </div>
                <div class="nav-li">Login/Sign UP</div>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
