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

class CadastroVeiculo extends Component {
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
  static navigationOptions = { 
    title: 'CadastroVeiculo',
    header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <Container style={{backgroundColor: '#ECBF06'  }}>
        <Header style={{backgroundColor: '#ECBF06'}}>
          <Body style={{alignItems: "center", }}>
            <Title style={{color: "black"}}>Cadastro Veiculo</Title>
          </Body>
        </Header>
        <Content style={{marginTop: 50}}>
          <Form>
            <Item floatingLabel  style={styles.ItemInput}>
              <Label style={styles.LabelInput}>Placa</Label>
              <Input />
            </Item>
            
            <Item floatingLabel  style={styles.ItemInput}>
              <Label style={styles.LabelInput}>Modelo</Label>
              <Input />
            </Item>

            <Item floatingLabel  style={styles.ItemInput}>
              <Label style={styles.LabelInput}>Marca</Label>
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
          <Button block  onPress={() => navigate('Home')} style={styles.ButtonMain}>
            <Text>Salvar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default CadastroVeiculo;
