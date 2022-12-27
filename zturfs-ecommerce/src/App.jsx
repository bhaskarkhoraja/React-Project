import React, { Component } from "react";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Product from "./Pages/Productpage";
import Register from "./Pages/Register";
import ProductList from "./Pages/ProductList";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Announcement from "./Components/Announcement";
import Footers from "./Components/Footers";
import Navbar from "./Components/Navbar";
import { PopularProduct, CartItems } from "./Data";

export default class App extends Component {
 
  constructor() {
    super();
    this.state = {
      CartItems,
      PopularProduct,
      Total: 0,
      DeliveryCharge: 300,
      Discount: 100,
      MenuOpen: false,
      ShowIndex: 4,
    };
  }

  updateShowIndex = (id) => {
    this.setState({ ShowIndex: id });
  };

  handleMenu = () => {
    this.setState({ MenuOpen: !this.state.MenuOpen });
  };

  updateTotal = () => {
    let total = 0;
    this.state.CartItems.map((items) => (total += items.totalprice));
    this.setState({ Total: total });
  };

  findindex = (id, array) => {
    return array.findIndex((element) => element.id === id);
  };

  handleAddSub = (todo, id, type) => {
    let elementsIndex;
    let newArray;
    if (type === "CartItems") {
      elementsIndex = this.findindex(id, this.state.CartItems);
      newArray = [...this.state.CartItems];
    } else {
      elementsIndex = this.findindex(id, this.state.PopularProduct);
      newArray = [...this.state.PopularProduct];
    }
    if (todo === "add") {
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        quantity: newArray[elementsIndex].quantity + 1,
        totalprice:
          newArray[elementsIndex].totalprice + newArray[elementsIndex].price,
      };
      this.setState({
        Total: this.state.Total + newArray[elementsIndex].price,
      });
    } else {
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        quantity: newArray[elementsIndex].quantity - 1,
        totalprice:
          newArray[elementsIndex].totalprice - newArray[elementsIndex].price,
      };
      this.setState({
        Total: this.state.Total - newArray[elementsIndex].price,
      });
    }

    if (type === "CartItems") {
      this.setState({
        CartItems: newArray,
      });
    } else {
      this.setState({
        PopularProduct: newArray,
      });
    }
  };

  toggleCartItems = (item, quantity) => {
    let isCart = false;
    let newCartItems = item;
    newCartItems.quantity = quantity;

    const elementsIndex = this.findindex(item.id, this.state.PopularProduct);
    let newArray = [...this.state.PopularProduct];
    this.state.CartItems.forEach((items) => {
      if (items.id === item.id) {
        isCart = true;
      }
    });

    if (isCart) {
      let copyArray = [...this.state.CartItems];
      const cartIndex = this.state.CartItems.findIndex(
        (element) => element.id === item.id
      );
      copyArray.splice(cartIndex, 1);

      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        isCart: false,
      };
      this.setState({ CartItems: copyArray, PopularProduct: newArray });
      let total = 0;
      this.state.CartItems.map((items) => (total += items.totalprice));
      this.setState({ Total: total });
    } else {
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        isCart: true,
        size: "M",
      };
      this.setState({
        CartItems: [...this.state.CartItems, newCartItems],
        PopularProduct: newArray,
      });
      let total = 0;
      this.state.CartItems.map((items) => (total += items.totalprice));
      this.setState({ Total: total });
    }
  };

  togglewish = (id) => {
    const elementsIndex = this.findindex(id, this.state.PopularProduct);
    let newArray = [...this.state.PopularProduct];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      wishlist: !newArray[elementsIndex].wishlist,
    };
    this.setState({
      PopularProduct: newArray,
    });
  };
  
  render() {
    return (
      <Router>
        <Announcement />
        <Navbar
          cartNumber={Object.keys(this.state.CartItems).length}
          menuOpen={this.state.MenuOpen}
          handleMenu={this.handleMenu}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                toggleCart={this.toggleCartItems}
                popularProduct={this.state.PopularProduct}
                togglewish={this.togglewish}
                updateid={this.updateShowIndex}
              />
            }
          ></Route>
          <Route
            exact
            path="/productlist"
            element={
              <ProductList
                toggleCart={this.toggleCartItems}
                popularProduct={this.state.PopularProduct}
                togglewish={this.togglewish}
                updateid={this.updateShowIndex}
              />
            }
          ></Route>
          <Route
            exact
            path="/product"
            element={
              <Product
                details={this.state.PopularProduct[this.state.ShowIndex]}
                handleAddSub={this.handleAddSub}
                toggleCart={this.toggleCartItems}
              />
            }
          ></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route
            exact
            path="/cart"
            element={
              <Cart
                details={this.state}
                updateItems={this.handleAddSub}
                updateTotal={this.updateTotal}
              />
            }
          ></Route>
        </Routes>
        <Footers />
      </Router>
    );
  }
}
