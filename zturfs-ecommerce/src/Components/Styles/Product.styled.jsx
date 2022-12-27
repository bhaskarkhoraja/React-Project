import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease;
`;

export const Container = styled.div`
  flex: 1;
  margin: 10px;
  min-width: 350px;
  height: 400px;
  background-color: #d5e6f6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
    cursor: pointer;
  }

  ${media.mobile} {
    min-width: 315px;
  }
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  object-fit: cover;
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
