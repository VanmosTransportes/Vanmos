import React, { Component } from "react";
import {
  Button,
  Text,
  Container
} from "native-base";

import { ScrollView } from 'react-native'

import styles from './styles'


export default class Register extends Component {

  render() {
    const { navigate } = this.props.navigation.getParam('navigation')
    return (
      <Container style={ styles.Container }>
        <ScrollView style={ styles.Content }>
          <Text style={ styles.Text }> VANMOS TRANSPORTES doravante denominada CONTRATANTE e, NARUTO UZUMAKI, empresa sediada em Araucária / PR, na Rua Eduardo Klemba com registro no cartório de Registro Civil das Pessoas Jurídicas de Belo Horizonte sob o número 0, inscrita no CNPJ/MF sob o n° 484545454, doravante denominada CONTRATADA, tem entre si justo e contratado o que abaixo se segue: </Text>
          <Text style={ styles.Text }>Cláusula Primeira:   OBJETO</Text>
          <Text style={ styles.Text }>1.1 Constitui objeto do presente contrato a prestação de serviços de assessoria comercial na busca de oportunidades de negócios de serviços de informática. </Text>
          <Text style={ styles.Text }>1.2 As atividades acima descritas não tem um caráter limitativo, podendo, a critério da Contratante, serem acrescidas de outras que se fizerem necessárias à assessoria comercial do cliente referido na cláusula anterior, mediante simples comunicação escrita.</Text>
          <Text style={ styles.Text }>1.2 As atividades acima descritas não tem um caráter limitativo, podendo, a critério da Contratante, serem acrescidas de outras que se fizerem necessárias à assessoria comercial do cliente referido na cláusula anterior, mediante simples comunicação escrita.</Text>
          <Text style={ styles.Text }>Cláusula  Segunda:  PRAZO DO CONTRATO </Text>
          <Text style={ styles.Text }>O prazo de vigência do presente CONTRATO é de 12 (doze) meses, contados  a partir da data de sua assinatura, findo o qual, se extingue. A renovação do presente contrato fica condicionada à ocorrência de manifestação expressa e escrita de ambas as partes.</Text>
          <Button block onPress={() => navigate('Main', {type: 'passenger'})} style={ styles.Button }>
            <Text>Contratar</Text>
          </Button>

          <Button block onPress={() => navigate('VanList', {navigation: this.props.navigation.getParam('navigation')})} style={ styles.BackButton }>
            <Text>Voltar</Text>
          </Button>
        </ScrollView>
      </Container>
    );
  }
}
