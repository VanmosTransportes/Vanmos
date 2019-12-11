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


export default class Register extends Component {

  render() {
    const { navigate } = this.props.navigation.getParam('navigation')
    return (
      <Container style={ styles.Container }>
        <Content style={ styles.Content }>
          <Form>
            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="person" /> 
              <Label style={styles.LabelInput}>Nome</Label>
              <Input />
            </Item>

            <Item floatingLabel mask={"+1 ([000]) [000] [00] [00]"} style={ styles.ItemInput } >
              <Icon active name="card" /> 
              <Label style={styles.LabelInput}>CPF</Label>
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
          <Button block onPress={() => navigate('Login')} style={ styles.RegisterButton }>
            <Text>Cadastrar</Text>
          </Button>
          <Button block onPress={() => navigate('Login')} style={ styles.BackButton }>
            <Text>Voltar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
