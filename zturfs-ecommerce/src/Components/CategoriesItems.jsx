import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Image,
  Info,
  Title,
} from "./Styles/CategoriesItems.styled";

export default class CategoriesItems extends Component {
  render() {
    return (
      <Container>
        <Image src={this.props.items.img} />
        <Info>
          <Title>{this.props.items.title}</Title>
          <Button>
            <Link to="/productlist">Shop Now</Link>
          </Button>
        </Info>
      </Container>
    );
  }
}
