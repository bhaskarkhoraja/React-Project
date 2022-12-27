import React, { Component } from "react";
import {
  Center,
  ContactItem,
  Container,
  Description,
  Icon,
  IconContainer,
  Left,
  List,
  ListItem,
  Logo,
  Right,
  Title,
} from "./Styles/Footers.styled";
import Facebook from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
export default class Footers extends Component {
  render() {
    return (
      <Container>
        <Left>
          <Logo>Zturf</Logo>
          <Description>Find all your dream clothes in one place</Description>
          <IconContainer>
            <Icon bg="#4267B2">
              <Facebook style={{ color: "white" }} />
            </Icon>
            <Icon bg="#E1306C">
              <InstagramIcon style={{ color: "white" }} />
            </Icon>
            <Icon bg="#1DA1F2">
              <TwitterIcon style={{ color: "white" }} />
            </Icon>
            <Icon bg="#E60023">
              <PinterestIcon style={{ color: "white" }} />
            </Icon>
          </IconContainer>
        </Left>
        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contacts</Title>
          <ContactItem>
            <LocationOnIcon style={{marginRight:"10px"}}/> Rambazzar-10, Pokhara, Kaski
          </ContactItem>
          <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}/> +977 9800000000
          </ContactItem>
          <ContactItem>
            <MailIcon style={{marginRight:"10px"}}/> zturf@gmail.com
          </ContactItem>
        </Right>
      </Container>
    );
  }
}
