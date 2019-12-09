import React, { StatusBar, Component } from "react";
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
import styles from '../styles/styles'

class LoginScreen extends Component {
  static navigationOptions = { 
    title: 'Login',
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <Container style={{backgroundColor: '#ECBF06'  }}>
        <Header style={{backgroundColor: '#ECBF06'}}>
          <Body style={{alignItems: "center", }}>
            <Title style={{color: "black"}}>VANMOS</Title>
          </Body>
        </Header>
        <Content style={{marginTop: 50}}>
          <Form>
            <Item floatingLabel style={ styles.ItemInput}>
              <Icon active name="mail" /> 
              <Label style={styles.LabelInput}>E-mail</Label>
              <Input />
            </Item>
            
            <Item floatingLabel style={styles.ItemInput}>
              <Icon active name="key" /> 
              <Label style={styles.LabelInput}>Senha</Label>
              <Input secureTextEntry />
            </Item>

           
          </Form>
          <Button block onPress={() => navigate('Home')} style={styles.ButtonMain}>
            <Text>Entrar</Text>
          </Button>
          <Text onPress={() => navigate('Cadastro')} style={{ marginLeft: 100}}>Novo Aqui? Cadastre-se</Text>
        </Content>
      </Container>
    );
  }
}


export default LoginScreen;