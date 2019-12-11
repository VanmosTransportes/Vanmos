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
  Picker
} from "native-base";

import styles from './styles'


export default class CreateDriver extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <Container style={ styles.Container }>
        <Content style={ styles.Content }>
          <Form>
            <Item floatingLabel style={ styles.ItemInput }>
              <Icon active name="person" /> 
              <Label style={styles.LabelInput}>Apelido</Label>
              <Input />
            </Item>

            <Item floatingLabel style={ styles.ItemInput } >
              <Icon active name="ios-home" /> 
              <Label style={styles.LabelInput}>Origem</Label>
              <Input />
            </Item>

            <Item floatingLabel style={ styles.ItemInput } >
              <Icon active name="ios-arrow-forward" /> 
              <Label style={styles.LabelInput}>Destino</Label>
              <Input />
            </Item>

            <Item floatingLabel style={ styles.ItemInput } >
              <Icon active name="ios-barcode" /> 
              <Label style={styles.LabelInput}>Placa</Label>
              <Input />
            </Item>
            
            <Item picker style={styles.ItemPicker}>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down" />}
                style={{ width: undefined }}
                placeholder="Motorista"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Item label="Selecione o Motorista" value="key0" />
                <Item label="Carlos" value="key1" />
                <Item label="Alexandre" value="key2" />
                <Item label="Matheus" value="key3" />
                <Item label="Yasmim" value="key4" />
              </Picker>
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
