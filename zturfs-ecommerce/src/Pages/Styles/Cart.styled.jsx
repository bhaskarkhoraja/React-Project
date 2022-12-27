import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div``;

export const Wrapper = styled.div`
  margin: 20px;
  height: 88vh;

  ${media.mobile} {
    margin: 10px;
    height: fit-content;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopButton = styled.button`
  padding: 10px;
  font-size: 19px;
  font-weight: 600;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
  cursor: pointer;

  ${media.mobile} {
    font-size: 15px;
    padding: 5px;
  }
`;

export const TopTexts = styled.div`
  ${media.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const TopText = styled.span`
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const Bottom = styled.div`
  display: flex;
  height: 70vh;
  margin-top: 20px;
  border-radius: 10px;

  ${media.mobile} {
    flex-direction: column-reverse;
    height: fit-content;
  }
`;

export const BottomLeft = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  ${media.mobile} {
    max-height: 70vh;
    margin-top: 20px;
  }
`;

export const Products = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;

export const Product = styled.div`
  height: 200px;
  display: flex;
  width: 80%;

  ${media.mobile} {
    width: calc(100vw-10px);
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${media.mobile} {
    flex: 0.9;
  }
`;

export const Image = styled.img`
  height: 80%;

  ${media.mobile} {
    width: 100%;
    height: auto;
  }
`;

export const HorizontalLine = styled.hr`
  width: 80%;

  ${media.mobile} {
    width: 90%;
  }
`;

export const ProductDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  ${media.mobile} {
    padding: 5px;
  }
`;

export const ProductDetail = styled.p`
  margin-bottom: 15px;
  font-size: 20px;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const AmountContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.mobile} {
    flex: 0.8;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const BottomRight = styled.div`
  flex: 1;
  border: 3px solid gray;
  border-radius: 20px;
  height: 93%;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${media.mobile} {
    margin-left: 0;
    height: 40%;
    border-radius: 10px;
    align-items: initial;
    justify-content: initial;
    padding: 5px;
  }
`;

export const TotalTitle = styled.h1`
  text-align: center;
  font-weight: 400;
  margin: 40px;

  ${media.mobile} {
    margin: 5px;
  }
`;

export const TotalDetails = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  ${media.mobile} {
    width: 100%;
  }
`;

export const TotalSubTitle = styled.p`
  font-size: 20px;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const TotalPrice = styled.p`
  font-size: 20px;

  ${media.mobile} {
    font-size: 15px;
  }
`;

export const GrandTotal = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin: 30px 0;

  ${media.mobile} {
    font-size: 20px;
    margin: 5px 0;
  }
`;

export const GrandPrice = styled.div`
  font-size: 25px;
  margin: 30px 0;

  ${media.mobile} {
    font-size: 20px;
    margin: 5px 0;
  }
`;
