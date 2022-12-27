import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div`
  flex: 1;
  margin: 10px 90px;
  height: 100%;
  position: relative;

  ${media.mobile} {
    flex: unset;
    height: 50vh;
    width: 90%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: brightness(95%);
`;

export const Info = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  background-color: #0000007d;
  padding: 5px 15px;
  border-radius: 20px;
  color: white;
  font-weight: 1000;
  cursor: default;

  ${media.mobile} {
    font-size: 20px;
  }
`;

export const Button = styled.button`
  margin-top: 5px;
  padding: 10px;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  font-weight: 600;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    background-color: ghostwhite;
    color: black;
  }

  ${media.mobile} {
    padding: 8px;
    font-size: 15px;
  }
`;
