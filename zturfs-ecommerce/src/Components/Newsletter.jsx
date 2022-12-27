import React, { Component } from "react";
import {
  Button,
  Container,
  Description,
  Input,
  InputContainer,
  Title,
} from "./Styles/Newsletter.styled";
import SendIcon from "@mui/icons-material/Send";

export default class Newsletter extends Component {
  render() {
    return (
      <Container>
        <Title>News Letter</Title>
        <Description>Never miss your product again</Description>
        <InputContainer>
          <Input placeholder="Enter your E-mail here" />
          <Button>
            <SendIcon />
          </Button>
        </InputContainer>
      </Container>
    );
  }
}
