import React, { Component } from "react";
import Header from "./header";
import GoToCart from "./gotocart";
import Intro from "./intro";
import Perks from "./perks";
import Plans from "./plans";
import Luck from "./luck";
import FAQ from "./faq";
import Schools from "./schools";
import Footer from "./footer";
import { ReactDOM } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <GoToCart />

        <Intro />

        <Perks />

        <Plans />

        <Luck />

        <FAQ />

        <Schools />

        <Footer />
      </div>
    );
  }
}

export default App;
