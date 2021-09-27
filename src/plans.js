import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Plans extends Component {
  render() {
    return (
      <div class="plans">
        <p class="plans-heading">Plans</p>
        <div class="cards">
          <div class="basic">
            <p class="cards-title">Basic</p>
            <ul class="cards-list">
              <li>FuncBox Binder</li>
              <li>3 mathematical apps</li>
              <li>3 scientific apps</li>
              <li>3 game apps</li>
              <li>Stickers</li>
              <li>Kickstart guide</li>
              <li>Interactive website</li>
            </ul>
          </div>
          <div class="std">
            <p class="cards-title">Standard</p>
            <ul class="cards-list">
              <li>FuncBox Binder</li>
              <li>5 mathematical apps</li>
              <li>5 scientific apps</li>
              <li>5 game apps</li>
              <li>Stickers</li>
              <li>Mini fun deck</li>
              <li>Kickstart guide</li>
              <li>Interactive website</li>
            </ul>
          </div>
          <div class="premium">
            <p class="cards-title">Premium</p>
            <ul class="cards-list">
              <li>FuncBox Binder</li>
              <li>8 mathematical apps</li>
              <li>8 scientific apps</li>
              <li>8 game apps</li>
              <li>2 Surprise goodies</li>
              <li>Mystery Toy</li>
              <li>Stickers</li>
              <li>Mini Fun Deck</li>
              <li>Kickstart guide</li>
              <li>Interactive website</li>
            </ul>
          </div>
        </div>

        <div class="cards-bg">
          <img class="alien" src="icons/alien.png" />
          <img class="birds" src="icons/birds.png" />
        </div>
      </div>
    );
  }
}

export default Plans;
