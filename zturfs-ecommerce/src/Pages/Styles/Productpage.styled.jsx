import React from "react";
import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div``;

export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  height: 90vh;

  ${media.mobile} {
    padding: 5px;
    flex-direction: column;
    height: fit-content;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  ${media.mobile} {
    flex: initial;
    height: 30vh;
  }
`;

export const Image = styled.img`
  height: 90%;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 30px;

  ${media.mobile} {
    flex: initial;
    height: fit-content;
    padding: 5px;
    display: flex;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;

  ${media.mobile} {
    font-size: 20px;
    margin: 3px 0;
    text-align: center;
  }
`;

export const Description = styled.ul`
  ${media.mobile} {
    padding-left: 13px;
  }
`;

export const Points = styled.li`
  padding-bottom: 10px;

  ${media.mobile} {
    margin-bottom: 4px;
  }
`;

export const Price = styled.p`
  font-size: 30px;
  padding: 30px 0;

  ${media.mobile} {
    font-size: 20px;
    padding: 5px 0;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 30px;

  ${media.mobile} {
    flex-direction: column;
    margin-bottom: 5px;
  }
`;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.mobile} {
    justify-content: flex-start;
    padding: 5px 0;
  }
`;

export const FilterTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;

  ${media.mobile} {
    font-size: 20px;
  }
`;

export const FilterColor = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border: 1px solid teal;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;

  ${media.mobile} {
    width: 30px;
    height: 30px;
  }
`;

export const FilterSize = styled.select`
  padding: 10px;
  margin-left: 10px;
  font-size: 20px;

  ${media.mobile} {
    padding: 5px;
    font-size: 15px;
  }
`;

export const FilterSizeOption = styled.option``;

export const NumCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60%;

  ${media.mobile} {
    width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;

  ${media.mobile} {
    margin-bottom: 5px;
  }
`;

const DchangeButton = styled.button`
  background: transparent;
  border: 1px solid gray;
  border-radius: 50px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }

  ${media.mobile} {
    height: 20px;
    width: 20px;
    margin: 8px 0;
    border: none;
  }
`;

export const ChangeButton = (props) => {
  return (
    <DchangeButton
      disabled={props.type === "sub" ? props.items <= 1 : props.items >= 5}
      onClick={props.onclick}
    >
      {props.children}
    </DchangeButton>
  );
};

export const Amount = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 20px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;

  ${media.mobile} {
    height: 30px;
    width: 30px;
  }
`;

export const CartButton = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  border: 1px solid teal;
  border-radius: 20px;
  transition: all 0.4s ease;

  &:hover {
    cursor: pointer;
    background-color: #f5f5f8;
  }

  ${media.mobile} {
    border-radius: 10px;
  }
`;
