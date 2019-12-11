import React, { Component } from "react";
import { 
    Content,
    Icon,
    Accordion,
    Text
} from "native-base";

import { 
    Container,
    Title,
    ListText,
    ListItem,
    ListSubItem,
    ListSubText,
    SignOutButton,
    SignOutButtonText
} from './styles'

const dataArray = [
  { title: "Companhia: My Company", content: "Origem: Agência Mirum /  Destino: Unifacear" },
  { title: "Companhia: Ultra Transportes", content: "Origem: Shopping Palladium /  Destino: UFPR" },
  { title: "Companhia: TransYukio", content: "Origem: Terminal Pinheirinho /  Destino: IFPR" }
];

export default class VanList extends Component {
    
    _renderHeader(item, expanded) {
    return (
      <ListItem>
        <ListText>{item.title}</ListText>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />
        }
      </ListItem>
    );
  }
  _renderContent(item) {
    return (
        <ListSubItem>
            <ListSubText>
                {item.content}
            </ListSubText>
        </ListSubItem>
    );
  }
  render() {
    const {navigate} = this.props.navigation;
    
    return (
      <Container>
        <Title>Vans</Title>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        <SignOutButton onPress={() => navigate('Main', {type: 'passenger'}) }>
            <SignOutButtonText>Voltar</SignOutButtonText>
        </SignOutButton>
      </Container>
    );
  }
}
<br/>