import React, { Component } from "react";
import Categories from "../Components/Categories";
import Newsletter from "../Components/Newsletter";
import Products from "../Components/Products";
import Slider from "../Components/Slider";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider />
        <Categories />
        <Products {...this.props} />
        <Newsletter />
      </div>
    );
  }
}
