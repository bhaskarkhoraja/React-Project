import React, { Component } from 'react'
import {
  Center,
  Container,
  HamContainer,
  HamItems,
  Input,
  Language,
  Left,
  Logo,
  MenuItems,
  Right,
  SearchContainer,
} from './Styles/Navbar.styled'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <Container>
        <HamContainer onClick={() => this.props.handleMenu()}>
          {this.props.menuOpen ? (
            <HamItems src={require('../Assets/Navbar/Cross.png')} />
          ) : (
            <HamItems src={require('../Assets/Navbar/Ham.png')} />
          )}
        </HamContainer>
        <Left menuOpen={this.props.menuOpen}>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{ color: 'gray', fontSize: '19px' }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to='/'>Zturf</Link>
          </Logo>
        </Center>
        <Right menuOpen={this.props.menuOpen}>
          <MenuItems
            onClick={() => {
              this.props.handleMenu()
              window.scrollTo(0, 0)
            }}
          >
            <Link to='/register'>Register</Link>
          </MenuItems>
          <MenuItems
            onClick={() => {
              this.props.handleMenu()
              window.scrollTo(0, 0)
            }}
          >
            <Link to='/login'>LOG IN</Link>
          </MenuItems>
          <MenuItems
            onClick={() => {
              this.props.handleMenu()
              window.scrollTo(0, 0)
            }}
          >
            <Link to='/cart'>
              <Badge badgeContent={this.props.cartNumber} color='primary'>
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Link>
          </MenuItems>
        </Right>
      </Container>
    )
  }
}
