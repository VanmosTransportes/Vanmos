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


export default class ListDriver extends Component {

  render() {
    const { navigate } = this.props.navigation.getParam('navigation')
    return (
      <Container style={ styles.Container }>
        <Content style={ styles.Content }>
          <List>
            <ListItem avatar >
              <Body style={ styles.ListItem }>
                <Text>Sasuke Uchiha</Text>
                <Text note>CNH: 90782925200</Text>
                <Text note>Phone: (41) 994568981</Text>
                <Text note>Email: motorista@gmail.com</Text>
                <Text note>Senha: vomataoitachi</Text>
              </Body>
              <Right style={ styles.ListItem }>
                <Text>AFK-2158</Text>
              </Right>
            </ListItem>
          </List>
          
          <List>
            <ListItem avatar >
              <Body style={ styles.ListItem }>
                <Text>Itachi Uchiha</Text>
                <Text note>CNH: 30732225225</Text>
                <Text note>Phone: (41) 994985982</Text>
                <Text note>Email: motorista2@gmail.com</Text>
                <Text note>Senha: vomatameucla</Text>
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
