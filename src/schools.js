import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Schools extends Component {
  render() {
    return (
      <div class="schools">
        <p class="schools-title">For Schools</p>
        <img class="bag" src="icons/bagpack.png" />
        <img class="teacher" src="icons/teacher.png" />
        <img class="note" src="icons/notebooks.png" />
        <div class="schools-txt">
          <p>
            Yay! FuncBox brings special discount for all the School Tie-ups.
            FuncBox can be easily incorporated in all the school grades. To make
            your students outperform and help your institute gain an edge over
            the others contact our team NOW!
          </p>
          <p class="know">Know more</p>
        </div>
      </div>
    );
  }
}

export default Schools;
