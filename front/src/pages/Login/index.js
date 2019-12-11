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


export default class Login extends Component {
  
  state = { 
    email: "",
    navigation: this.props.navigation 
  }

  enter(){
    const {navigate} = this.state.navigation;
    
    if(this.state.email.includes('Motorista')){
      navigate('Main', { type: 'driver' })
    }
    else if(this.state.email.includes('Passageiro')){
      navigate('Main', { type: 'passenger' })
    }
    else{
      navigate('Main', { type: 'owner' })
    }
  }

  render() {
    return (
      <Container style={ styles.Container }>
        <Content style={ styles.Content }>
          <Form>
            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="mail" /> 
              <Label style={styles.LabelInput}>E-mail</Label>
              <Input onChange={(e) => this.state.email = e.nativeEvent.text} />
            </Item>
            
            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="key" /> 
              <Label style={styles.LabelInput}>Senha</Label>
              <Input secureTextEntry />
            </Item> 
          </Form>
          <Button block onPress={() => this.enter()} style={ styles.Login }>
            <Text>Entrar</Text>
          </Button>
          <Text onPress={() => navigate('Register')} style={ styles.RegisterText } >Novo Aqui? Cadastre-se</Text>
        </Content>
      </Container>
    );
  }
}
