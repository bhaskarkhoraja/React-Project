import ArrowBackIosNew from "@mui/icons-material/ArrowBackIosNew";
import React, { Component } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  AmountContainer,
  Bottom,
  BottomLeft,
  BottomRight,
  Container,
  HorizontalLine,
  Image,
  ImageContainer,
  ItemContainer,
  Product,
  Products,
  ProductDetail,
  ProductDetails,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  TotalSubTitle,
  TotalDetails,
  TotalTitle,
  Wrapper,
  TotalPrice,
  GrandTotal,
  GrandPrice,
} from "./Styles/Cart.styled";
import { ChangeButton, Amount, Price } from "./Styles/Productpage.styled";
import { Link } from "react-router-dom";

export default class Cart extends Component {
  componentDidMount() {
    this.props.updateTotal();
  }
  render() {
    return (
      <Container>
        <Wrapper>
          <Title>Your Cart</Title>
          <Top>
            <Link to="/">
              <TopButton>
                <ArrowBackIosNew style={{ fontSize: "10px" }} />
                Continue Shopping
              </TopButton>
            </Link>
            <TopTexts>
              <TopText>Whishlist (4)</TopText>
              <TopText>Shopping List (1)</TopText>
            </TopTexts>
          </Top>
          <Bottom>
            <BottomLeft>
              {this.props.details.CartItems.map((items) => (
                <Products key={items.id}>
                  <Product>
                    <ImageContainer>
                      <Image src={items.img} />
                    </ImageContainer>
                    <ProductDetails>
                      <ProductDetail>
                        <b>Name:</b> {items.name}
                      </ProductDetail>
                      <ProductDetail>
                        <b>ID:</b> {items.id}
                      </ProductDetail>
                      <ProductDetail>
                        <b>Color:</b> {items.color}
                      </ProductDetail>
                      <ProductDetail>
                        <b>Size:</b> {items.size}
                      </ProductDetail>
                    </ProductDetails>
                    <AmountContainer>
                      <Price>Total: $ {items.totalprice}</Price>
                      <ItemContainer>
                        <ChangeButton
                          onclick={() =>
                            this.props.updateItems("sub", items.id,"CartItems")
                          }
                          items={items.quantity}
                          type="sub"
                        >
                          <RemoveIcon />
                        </ChangeButton>
                        <Amount>{items.quantity}</Amount>
                        <ChangeButton
                          onclick={() =>
                            this.props.updateItems("add", items.id,"CartItems")
                          }
                          items={items.quantity}
                          type="add"
                        >
                          <AddIcon />
                        </ChangeButton>
                      </ItemContainer>
                    </AmountContainer>
                  </Product>
                  <HorizontalLine />
                </Products>
              ))}
            </BottomLeft>
            <BottomRight>
              <TotalTitle>Your Orders</TotalTitle>
              <TotalDetails>
                <TotalSubTitle>Total</TotalSubTitle>
                <TotalPrice>$ {this.props.details.Total}</TotalPrice>
              </TotalDetails>
              <TotalDetails>
                <TotalSubTitle>Delivery Charge</TotalSubTitle>
                <TotalPrice>$ {this.props.details.DeliveryCharge}</TotalPrice>
              </TotalDetails>
              <TotalDetails>
                <TotalSubTitle>Discount</TotalSubTitle>
                <TotalPrice>$ {this.props.details.Discount}</TotalPrice>
              </TotalDetails>
              <TotalDetails>
                <GrandTotal>Grand Total</GrandTotal>
                <GrandPrice>
                  $
                  {this.props.details.Total +
                    this.props.details.DeliveryCharge -
                    this.props.details.Discount}
                </GrandPrice>
              </TotalDetails>
              <TopButton>Checkout Now</TopButton>
            </BottomRight>
          </Bottom>
        </Wrapper>
      </Container>
    );
  }
}
