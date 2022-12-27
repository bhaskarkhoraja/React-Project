import SearchOutlined from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartOutlined from "@mui/icons-material/ShoppingCartOutlined";
import React, { Component } from "react";
import { Container, Icon, Image, Info } from "./Styles/Product.styled";
import { Link } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
      <Container>
        <Image src={this.props.items.img} />
        <Info>
          <Icon
            onClick={() => this.props.toggleCart(this.props.items,this.props.items.quantity)}
            style={
              this.props.items.isCart
                ? { backgroundColor: "#3c95ec", color: "ghostwhite" }
                : {}
            }
          >
            <ShoppingCartOutlined />
          </Icon>
          <Link to="/product">
            <Icon
              onClick={() => {
                window.scrollTo(0, 0);
                this.props.updateid(this.props.items.id - 1);
              }}
            >
              <SearchOutlined />
            </Icon>
          </Link>
          <Icon onClick={() => this.props.togglewish(this.props.items.id)}>
            {this.props.items.wishlist ? (
              <FavoriteIcon style={{ color: "red" }} />
            ) : (
              <FavoriteBorderOutlined />
            )}
          </Icon>
        </Info>
      </Container>
    );
  }
}
