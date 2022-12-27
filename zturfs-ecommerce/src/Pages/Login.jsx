import React, { Component } from "react";
import Newsletter from "../Components/Newsletter";
import {
  Button,
  Container,
  CreateAccount,
  Forget,
  Form,
  FormContainer,
  Image,
  ImageContainer,
  Input,
  InputContainer,
  Title,
  Wrapper,
} from "./Styles/Login.styled";

export default class Login extends Component {
  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <ImageContainer>
              <Image
                src={require("../Assets/Register and Login/Login.svg")}
              />
            </ImageContainer>
            <FormContainer>
              <Form>
                <Title>Login</Title>
                <InputContainer>
                  <Input placeholder="Username" />
                  <Input placeholder="Password" />
                </InputContainer>
                <Forget>
                  Forget Password ? Click to recover
                </Forget>
                  <CreateAccount>Don't Have an Account? Create an account</CreateAccount>
                <Button>Create Account</Button>
              </Form>
            </FormContainer>
          </Wrapper>
        </Container>
        <Newsletter />
      </>
    );
  }
}
