import React, { Component } from "react";
import {
  Aggrement,
  Button,
  Container,
  Form,
  FormContainer,
  Image,
  ImageContainer,
  Input,
  InputContainer,
  PrivacyPolicy,
  Title,
  Wrapper,
} from "./Styles/Register.styled";

export default class Register extends Component {
  render() {
    return (
      <>
        <Container>
          <Wrapper>
            <ImageContainer>
              <Image
                src={
                  require("../Assets/Register and Login/Register.svg")
                }
              />
            </ImageContainer>
            <FormContainer>
              <Form>
                <Title>Sign Up</Title>
                <InputContainer>
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                  <Input placeholder="Username" />
                  <Input placeholder="Phone number" />
                  <Input placeholder="Password" />
                  <Input placeholder="Confirm Password" />
                </InputContainer>
                <Aggrement>
                  By creating an account, I consent to the processing of my
                  personal data in accordance with the{" "}
                  <PrivacyPolicy>
                    PRIVACY POLICY
                  </PrivacyPolicy>
                </Aggrement>
                <Button>Create Account</Button>
              </Form>
            </FormContainer>
          </Wrapper>
        </Container>
      </>
    );
  }
}
