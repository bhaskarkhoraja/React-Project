import React, { Component } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Amount,
  AmountContainer,
  CartButton,
  ChangeButton,
  Container,
  Description,
  Filter,
  FilterColor,
  FilterContainer,
  FilterSize,
  FilterSizeOption,
  FilterTitle,
  Image,
  ImageContainer,
  InfoContainer,
  NumCart,
  Points,
  Price,
  Title,
  Wrapper,
} from "./Styles/Productpage.styled";

export default class Product extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ImageContainer>
            <Image src={this.props.details.img} />
          </ImageContainer>
          <InfoContainer>
            <Title>{this.props.details.name}</Title>
            <Description>
              <Points>
                50% cotton/50% polyester, with up to 5% polyester created from
              </Points>
              <Points>
                Recycled plastic Imported Pull On closure Machine Wash Soft,
              </Points>
              <Points>
                Durable fleece with double-needle cover-seamed neck and armholes
              </Points>
              <Points>
                Stays strong when you work or play hard. Machine wash it again
                and
              </Points>
              <Points>
                Again without hesitation because it's pill-resistant Made with
                up
              </Points>
              <Points>
                To 5% polyester created from recycled plastic bottles.
              </Points>
              <Points>Dyed-to-match drawcord.</Points>
            </Description>
            <Price>${this.props.details.totalprice}</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color:</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="blue" />
                <FilterColor color="Orange" />
              </Filter>
              <Filter>
                <FilterTitle>Size:</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </Filter>
            </FilterContainer>
            {this.props.details.isCart ? (
              <CartButton
                onClick={() => this.props.toggleCart(this.props.details,this.props.details.quantity)}
              >
                Remove from cart
              </CartButton>
            ) : (
              <NumCart>
                <AmountContainer>
                  <ChangeButton
                    onclick={() =>
                      this.props.handleAddSub(
                        "sub",
                        this.props.details.id,
                        "PopularProduct"
                      )
                    }
                    items={this.props.details.quantity}
                    type="sub"
                  >
                    <RemoveIcon />
                  </ChangeButton>
                  <Amount>{this.props.details.quantity}</Amount>
                  <ChangeButton
                    onclick={() => {
                      this.props.handleAddSub(
                        "add",
                        this.props.details.id,
                        "PopularProduct"
                      );
                    }}
                    items={this.props.details.quantity}
                    type="add"
                  >
                    <AddIcon />
                  </ChangeButton>
                </AmountContainer>
                <CartButton
                  onClick={() => this.props.toggleCart(this.props.details,this.props.details.quantity)}
                >
                  Add to cart
                </CartButton>
              </NumCart>
            )}
          </InfoContainer>
        </Wrapper>
      </Container>
    );
  }
}
