import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  background-color: #fcdde2;
`;

export const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 30px;

  ${media.mobile} {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 30px;

  ${media.mobile} {
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 50px;
  display: flex;
  border: none;

  ${media.mobile} {
    width: 90%;
  }
`;

export const Input = styled.input`
  border: none;
  flex: 13;
  padding-left: 20px;
  font-size: 1.2em;

  &:focus {
    outline: none;
  }

  ${media.mobile} {
    flex: 10;
    font-size: 1em;
  }
`;

export const Button = styled.button`
  border: none;
  flex: 1;
  background-color: teal;
  color: white;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    border-radius: 5px;
  }

  ${media.mobile} {
    flex: 2;
  }
`;
