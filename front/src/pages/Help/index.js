import React, { Component } from 'react'

import {
  Container,
  Title,
  Text,
  SignOutButton,
  SignOutButtonText
} from './styles'

export default class TelaAjuda extends Component {
  
  render(){
    const {navigate} = this.props.navigation;
    const utype = JSON.stringify(this.props.navigation.getParam('utype'))
    return(
      <Container>
        <Title>Precisa de Ajuda?</Title>     
        <Text>
          - Para contratar um transporte selecione a opção <Text style={{ fontWeight: 'bold' }}>" Listar Vans "</Text>,
          então selecione a Van que seja ideal para você!
        </Text>
        <Text>
          - Após ter realizado a contratação de um transporte, você pode
          selecionar a opção <Text style={{ fontWeight: 'bold' }}>" Marcar Viagem "</Text>, que te da a possibilidade
          de selecionar uma data específica e informar antecipadamente se
          você irá ou não utilizar do seu transporte nesta data.
        </Text>
        <Text>      
          - Por padrão o aplicativo mantém selecionado que você irá com seu
          transporte <Text style={{ fontWeight: 'bold' }}>todos os dias!</Text>
        </Text>
        <Text>
          - Caso tenha dúvidas, entre em contato conosco em <Text style={{ fontWeight: 'bold' }}>vanmostransportes@gmail.com </Text>
        </Text>
        <SignOutButton onPress={() => navigate('Main', {type: utype})}>
          <SignOutButtonText>Voltar</SignOutButtonText>
        </SignOutButton>
      </Container>
    );    
  }
}