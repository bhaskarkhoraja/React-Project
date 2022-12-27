import React, { Component } from "react";
import {
  Arrow,
  Button,
  Container,
  Description,
  Image,
  ImageContainer,
  InfoContainer,
  Slide,
  Title,
  Wrapper,
} from "./Styles/Slider.styled";

import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { SliderItems } from "../Data";
import { Link } from "react-router-dom";

export default class Slider extends Component {
  constructor() {
    super();
    this.state = {
      SlideIndex: 0,
    };
  }
  handleClick(arrowpoints) {
    if (arrowpoints === "left") {
      this.setState({
        SlideIndex: this.state.SlideIndex === 0 ? 2 : this.state.SlideIndex - 1,
      });
    } else {
      this.setState({
        SlideIndex: this.state.SlideIndex === 2 ? 0 : this.state.SlideIndex + 1,
      });
    }
  }
  render() {
    return (
      <Container>
        <Arrow
          direction="left"
          onClick={() => {
            this.handleClick("left");
          }}
        >
          <ArrowCircleLeftOutlinedIcon
            style={{
              color: "Russian Violet",
              fontSize: "40px",
              opacity: "0.6",
            }}
          />
        </Arrow>
        <Wrapper SlideIndex={this.state.SlideIndex}>
          {SliderItems.map((item) => (
            <Slide key={item.id} bg={item.background}>
              <ImageContainer>
                <Image src={item.img} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>
                  {item.description}
                </Description>
                <Link to="/productlist" ><Button>Shop Now</Button></Link>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>
        <Arrow
          direction="right"
          onClick={() => {
            this.handleClick("right");
          }}
        >
          <ArrowCircleRightOutlinedIcon
            style={{
              color: "Russian Violet",
              fontSize: "40px",
              opacity: "0.6",
            }}
          />
        </Arrow>
      </Container>
    );
  }
}
