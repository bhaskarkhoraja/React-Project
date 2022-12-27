import React, { Component } from "react";
import Product from "./Product";
import { Container, Title, TitleContainer } from "./Styles/Products.styled";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";

export default class Products extends Component {
render() {
    return (
      <>
        <TitleContainer>
          <Title>Popular</Title>
          <ArrowRightSharpIcon style={{ fontSize: "50px" }} />
        </TitleContainer>
        <Container>
          {this.props.popularProduct.map((item) => (
            <Product
            items={item}
            key={item.id}
            {...this.props}
            />
          ))}
        </Container>
      </>
    );
  }
}
