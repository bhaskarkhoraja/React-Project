import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div`
  height: 40px;
  background-color: ghostwhite;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;

  ${media.mobile} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0;
  }
`;

export const HamContainer = styled.div`
  display: none;

  ${media.mobile} {
    position: absolute;
    box-sizing: border-box;
    width: 100vw;
    height: 40px;
    padding-left: 5px;
    z-index: 4;
    display: flex;
    align-items: center;
  }
`;

export const HamItems = styled.img`
  height: 70%;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  font-size: 16px;
  transition: all 0.2s ease;

  ${media.mobile} {
    position: relative;
    z-index: 2;
    flex: unset;
    flex-direction: column-reverse;
    box-sizing: border-box;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 40px;
    padding: 20px 0 0 25px;
    width: 100%;
    height: 100px;
    transform: translateY(${(props) => (props.menuOpen ? 0 : -150)}px);
    background-color: #f8f8ffe0;
  }
`;

export const Language = styled.p`
  cursor: pointer;
  ${media.mobile} {
    margin-bottom: 10px;

    user-select: none;
  }
`;

export const SearchContainer = styled.div`
  border: 0.1px solid gray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 15px;

  ${media.mobile} {
    margin: 0 0 20px 0;
    width: 215px;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: ghostwhite;
  font-size: 16px;
  padding-left: 5px;
  &:focus {
    outline: none;
  }
  ${media.mobile} {
    background-color: transparent;
  }
`;

export const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  ${media.mobile} {
    flex: unset;
    position: absolute;
    width: 50%;
    left: 25%;
    z-index: 4;
  }
`;

export const Logo = styled.h1`
  font-weight: bolder;
  cursor: default;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  transition: all 0.2s ease;

  ${media.mobile} {
    flex: unset;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #f8f8ffe0;
    width: 100%;
    transform: translateY(${(props) => (props.menuOpen ? 0 : -275)}px);
  }
`;

export const MenuItems = styled.div`
  font-size: 14;
  margin-left: 25px;
  cursor: pointer;

  ${media.mobile} {
    margin: 10px 0;
    padding-left: 25px;
  }
`;
