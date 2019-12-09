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

import { AppStyles } from "../AppStyles";

class CadastroTransportadora extends Component {
  static navigationOptions = { 
    title: 'CadastroTransportadora',
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <Container style={{backgroundColor: '#ECBF06'  }}>
        <Header style={{backgroundColor: '#ECBF06'}}>
          <Body style={{alignItems: "center", }}>
            <Title style={{color: "black"}}>Cadastro Transportadora</Title>
          </Body>
        </Header>
        <Content style={{marginTop: 50}}>
          <Form>
            <Item floatingLabel  style={styles.ItemInput}>
              <Label style={styles.LabelInput}>Nome Fantasia</Label>
              <Input />
            </Item>
            
            <Item floatingLabel style={styles.ItemInput}>
              <Label style={styles.LabelInput}>E-mail</Label>
              <Input />
            </Item>

            <Item floatingLabel style={styles.ItemInput}>
              <Label style={styles.LabelInput}>CNPJ</Label>
              <Input />
            </Item>

            <Item floatingLabel  style={styles.ItemInput}>
              <Label style={styles.LabelInput}>UF</Label>
              <Input />
            </Item>

            <Item floatingLabel  style={styles.ItemInput}>
              <Label style={styles.LabelInput}>Senha</Label>
              <Input secureTextEntry />
            </Item>

          </Form>
          <Button block onPress={() => navigate('Home')} style={styles.ButtonMain}>
            <Text>Salvar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default CadastroTransportadora;
