import React, { Component } from 'react'

import {
        Container,
        Nav,
        NavItem,
        NavText
} from './styles/dono'

import {
     Header,
     Body,
     Title
} from 'native-base'

import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderDono from '../components/HeaderDono/index'

class TelaDono extends Component {
    static navigationOptions = { 
        title: 'PerfilPassageiro',
        header: null
      };
    render(){
        return(
            <Container>
                <Header style={{backgroundColor: '#ECBF06'}}>
                    <Body style={{alignItems: "center"}}>
                        <Title style={{color: "black"}}>Menu</Title>
                    </Body>
                </Header>
                <HeaderDono />            
                <Nav>
                    <NavItem>
                        <Icon name='person' size={20} color='#040304' />
                        <NavText>Perfil</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon name='menu' size={20} color='#040304' />
                        <NavText>Gerenciar Motoristas</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon name='menu' size={20} color='#040304' />
                        <NavText>Gerenciar Frotas</NavText>
                    </NavItem> 
                </Nav>
            </Container>
        );    
    }
}

export default TelaDono
