import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div`
  height: calc(100vh - 60px);
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Arrow = styled.button`
  height: 50px;
  width: 50px;
  border: none;
  border-radius: 25px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -5em;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  z-index: 2;

  ${media.mobile} {
    top: 0;
  }
`;

export const Wrapper = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  transform: translateX(${(props) => props.SlideIndex * -100}vw);
  transition: all 1.2s ease;

  ${media.mobile} {
    height: calc(100vh - 80px);
  }
`;

export const Slide = styled.div`
  height: 100%;
  width: 100vw;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};

  ${media.mobile} {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  flex: 1.2;

  ${media.mobile} {
    flex: 1;
    padding-top: 20px;
  }
`;

export const Image = styled.img`
  width: 90%;
  padding-left: 6%;
`;
export const InfoContainer = styled.div`
  flex: 1;
  ${media.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-weight: bolder;
  font-size: 75px;

  ${media.mobile} {
    font-size: 40px;
    text-align: center;

  }
`;

export const Description = styled.p`
  margin: 50px 0;
  font-size: 30px;

  ${media.mobile} {
    padding: 0 10px;
    font-size: 20px;
    text-align: center;
    margin:20px 0;
  }
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background: transparent;
  border-radius: 20px;
  cursor: pointer;
  border: 0.8px solid gray;
  transition: all 0.3s ease;

  &:hover {
    background-color: ghostwhite;
  }
`;
