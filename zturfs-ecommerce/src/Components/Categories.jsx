import React, { Component } from "react";
import CategoriesItems from "./CategoriesItems";
import { Container, Title, TitleContainer } from "./Styles/Categories.styled";
import ArrowRightSharpIcon from "@mui/icons-material/ArrowRightSharp";
import { Category } from "../Data";

export default class Categories extends Component {
  render() {
    return (
      <>
        <TitleContainer>
          <Title>
            Categories
          </Title>
             <ArrowRightSharpIcon style={{ fontSize: "50px"}} />
        </TitleContainer>
        <Container>
          {Category.map((item) => (
            <CategoriesItems key={item.id} items={item} />
          ))}
        </Container>
      </>
    );
  }
}
