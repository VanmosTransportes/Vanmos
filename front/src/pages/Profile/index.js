import React, { Component } from 'react'

import {
  Container,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText
} from './styles'

import { motorista, dono, passageiro } from '../../services/db'
export default class Profile extends Component {
  
  render(){
    const { navigate } = this.props.navigation
    const utype = this.props.utype
    const infos = utype.includes('driver') ? motorista : ( utype.includes('passenger') ? passageiro : dono)
    return(
      <Container>
        <Nav>
          <NavItem>
            <NavText>{infos.name}</NavText>
          </NavItem>
          <NavItem>
            <NavText>{infos.code}</NavText>
          </NavItem>
          <NavItem>
            <NavText>{infos.email}</NavText>
          </NavItem>
          <NavItem>
            <NavText>{infos.phone}</NavText>
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