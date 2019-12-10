import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text, 
  Picker
} from "native-base";

import styles from './styles'


export default class Login extends Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={ styles.Container }>
        <Content style={ styles.Content }>
          <Form>
            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="mail" /> 
              <Label style={styles.LabelInput}>E-mail</Label>
              <Input />
            </Item>
            
            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="key" /> 
              <Label style={styles.LabelInput}>Senha</Label>
              <Input secureTextEntry />
            </Item> 
          </Form>
          <Button block onPress={() => navigate('Main')} style={ styles.Login }>
            <Text>Entrar</Text>
          </Button>
          <Text onPress={() => navigate('Register')} style={ styles.RegisterText } >Novo Aqui? Cadastre-se</Text>
        </Content>
      </Container>
    );
  }
}
