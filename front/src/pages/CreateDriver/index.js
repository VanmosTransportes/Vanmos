import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  Item,
  Label,
  Input,
  Icon,
  Form,
  Text,
} from "native-base";

import styles from './styles'


export default class CreateDriver extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={ styles.Container }>
        <Content style={ styles.Content }>
          <Form>
            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="person" /> 
              <Label style={styles.LabelInput}>Nome</Label>
              <Input />
            </Item>

            <Item floatingLabel style={ styles.ItemInput } >
              <Icon active name="card" /> 
              <Label style={styles.LabelInput}>CNH</Label>
              <Input />
            </Item>
            
            <Item floatingLabel style={ styles.ItemInput } >
              <Icon active name="ios-call" /> 
              <Label style={styles.LabelInput}>Telefone</Label>
              <Input />
            </Item>

            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="mail" /> 
              <Label style={styles.LabelInput}>E-mail</Label>
              <Input />
            </Item>

            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="mail" /> 
              <Label style={styles.LabelInput}>Confirmar E-mail</Label>
              <Input />
            </Item>
            
            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="key" /> 
              <Label style={styles.LabelInput}>Senha</Label>
              <Input secureTextEntry />
            </Item> 
          </Form>
          <Button block onPress={() => navigate('Main', {type: 'owner'})} style={ styles.RegisterButton }>
            <Text>Cadastrar</Text>
          </Button>
          <Button block onPress={() => navigate('Main', {type: 'owner'})} style={ styles.BackButton }>
            <Text>Voltar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
