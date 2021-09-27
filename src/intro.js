import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Intro extends Component {
  render() {
    return (
      <div class="intro">
        <img class="intro-img" src="icons/kids.png" />

        <img class="intro-img-bg" src="icons/box1.png" />

        <section class="intro-txt">
          <section class="intro-txt-1">
            <p>
              FuncBox is a box full of surprises which will teach you
              educational concepts and coding with a revolutionary twist.
            </p>
          </section>

          <section class="intro-txt-2">
            <ul>
              <li>Perfect for age-group 6-12 years.</li>
              <li>Build your own fun games.</li>
              <li>Learn to code and explore.</li>
              <li>Share your game with your friends.</li>
            </ul>
          </section>
        </section>
      </div>
    );
  }
}

export default Intro;
