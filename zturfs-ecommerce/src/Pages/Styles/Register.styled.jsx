import styled from "styled-components";

const media = {
  mobile: "@media only screen and (max-width: 730px)",
};

export const Container = styled.div`
  background-color: #7ad3ff3c;
`;

export const Wrapper = styled.div`
  height: 95vh;
  display: flex;

  ${media.mobile} {
    flex-direction: column;
    height: fit-content;
  }
`;

export const ImageContainer = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.mobile} {
    margin-top: 20px;
  }
`;

export const Image = styled.img`
  width: 60%;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  height: fit-content;

  ${media.mobile} {
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.div`
  background: lightblue;
  border-radius: 10px;
  padding: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 70%;
  margin-top: 100px;

  ${media.mobile} {
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  margin: 30px 0;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 15px;
  margin: 20px 10px;
  font-size: 15px;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

export const Aggrement = styled.p`
  display: inline-block;
`;

export const PrivacyPolicy = styled.p`
  display: inline-block;
  font-weight: 500;
  text-decoration: underline;
  transition: all 0.5 ease;

  &:hover {
    cursor: pointer;
    font-weight: 900;
  }
`;

export const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  opacity: 0.8;
  border: 1px solid teal;
  border-radius: 10px;
  font-size: 17px;
  transition: all 0.5 ease;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;
