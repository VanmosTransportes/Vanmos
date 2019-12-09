//Tela com as informações do passageiro
import React, { Component } from 'react'

import {
    Container,
    Nav,
    NavItem,
    NavText
} from './styles/passageiro'

import {
     Header,
     Body,
     Title
} from 'native-base'

import Icon from 'react-native-vector-icons/MaterialIcons'
import HeaderPassageiro from '../components/Header/index'

class PerfilPassageiro extends Component {
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
                <HeaderPassageiro />            
                <Nav>
                    <NavItem>
                        <Icon name='person' size={20} color='#040304' />
                        <NavText>Perfil</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon name='menu' size={20} color='#040304' />
                        <NavText>Lista de Vans</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon name='event' size={20} color='#040304' />
                        <NavText>Marcar Viagens</NavText>
                    </NavItem>
                    <NavItem>
                        <Icon name='flag' size={20} color='#040304' />
                        <NavText>Ajuda</NavText>
                    </NavItem>  
                </Nav>
            </Container>
        );    
    }
}

export default PerfilPassageiro