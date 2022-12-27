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
  }
`;

export const ImageContainer = styled.div`
  flex: 1.2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 60%;
`;

export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  ${media.mobile} {
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.div`
  background: lightblue;
  border-radius: 10px;
  padding: 20px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;

  ${media.mobile} {
    margin-top: 0;
    margin-bottom: 10px;
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
  flex-direction: column;
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

export const Forget = styled.p`
  padding-bottom: 20px;
  text-decoration: underline;
  transition: all 0.5 ease;
  &:hover {
    cursor: pointer;
    font-weight: 900;
  }
`;

export const CreateAccount = styled.p`
  font-weight: 500;
  padding-bottom: 20px;
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
