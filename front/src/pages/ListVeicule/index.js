import React, { Component } from "react";
import {
  Container,
  Content,
  Button,
  List,
  ListItem,
  Body,
  Text,
  Right,
} from "native-base";

import styles from './styles'


export default class Register extends Component {

  render() {
    const { navigate } = this.props.navigation.getParam('navigation')
    return (
      <Container style={ styles.Container }>
        <Content style={ styles.Content }>
          <List>
            <ListItem avatar >
              <Body style={ styles.ListItem }>
                <Text>Wolksvagem</Text>
                <Text note>Origem: Avenida Duque de Caxias</Text>
                <Text note>Destino: Facear</Text>
              </Body>
              <Right style={ styles.ListItem }>
                <Text>AFK-2158</Text>
              </Right>
            </ListItem>
          </List>
          
          <List>
            <ListItem avatar >
              <Body style={ styles.ListItem }>
                <Text>Wolksvagem</Text>
                <Text note>Origem: Konoha</Text>
                <Text note>Destino: Vila da Areia</Text>
              </Body>
              <Right style={ styles.ListItem }>
                <Text>FGT-2314</Text>
              </Right>
            </ListItem>
          </List>

          <Button block onPress={() => navigate('Main', {type: 'owner'})} style={ styles.BackButton }>
            <Text>Voltar</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
