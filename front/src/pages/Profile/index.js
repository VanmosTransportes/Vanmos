import React, { Component } from 'react'

import {
  Container,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles'

export default class Profile extends Component {
  
  render(){
    const { navigate } = this.props.navigation
    return(
      <Container>
        <Nav>
          <NavItem>
            <NavText>Matheus Dalenga</NavText>
          </NavItem>
          <NavItem>
            <NavText>(41) 9 8772-2774</NavText>
          </NavItem>
          <NavItem>
            <NavText>dalenga@gmail.com</NavText>
          </NavItem>
          <NavItem>
            <NavText>120.234.548-73</NavText>
          </NavItem>
        </Nav>

        {
          this.props.utype.includes('driver')
          &&
          <SignOutButton onPress={() => navigate('Login')}>
            <SignOutButtonText>Sair do App</SignOutButtonText>
          </SignOutButton>
        }

      </Container>
    );    
  }
}