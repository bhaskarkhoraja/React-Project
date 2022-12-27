import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div`
  background-color: lightblue;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: default;

  ${media.mobile} {
    position: relative;
    font-size: 12px;
    font-weight: bold;
    z-index: 11;
  }
`;
