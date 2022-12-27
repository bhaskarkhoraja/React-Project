import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  ${media.mobile} {
    flex-direction: column;
    height: fit-content;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
`;

export const Title = styled.h1`
  padding-left: 25px;
  font-size: 40px;
  vertical-align: middle;

  ${media.mobile} {
    font-size: 30px;
  }
`;
