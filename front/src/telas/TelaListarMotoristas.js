import React, { Component } from "react";
import { 
    Content,
    Icon,
    Accordion,
    Text,
    View,
    Body
} from "native-base";

import { 
    Container,
    Title
} from './styles/listarFrotas'

import HeaderMot from '../components/HeaderMot/index'

const dataArray = [
  { title: "João da Silva", content: "Veículo: ABC-123" },
  { title: "Marcos Castro", content: "Veículo: DEF-456" },
  { title: "Luiz Yamada", content: "Veículo: GHI-789" },
  { title: "Ector Luiz", content: "Veículo: JKL-101" },
  { title: "Ediee Pinheiro", content: "Veículo: MNO-112" },
  { title: "José de Carvalho", content: "Veículo: PQR-131" }
];

export default class AccordionCustomHeaderContent extends Component {
  _renderHeader(item, expanded) {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#FFCA3A"
      }}>
      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  _renderContent(item) {
    return (
      <Text
        style={{
          backgroundColor: "#fff",
          padding: 10,
          fontStyle: "italic",
        }}
      >
        {item.content}
      </Text>
    );
  }
  render() {
    return (
      <Container>
        <HeaderMot style={{backgroundColor: '#ECBF06'}}>
                    <Body style={{alignItems: "center"}}>
                        
                    </Body>
        </HeaderMot>
        <Title>Listas de Motoristas</Title>
        <Content padder style={{ backgroundColor: "#FFA343" }}>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={true}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </Content>
      </Container>
    );
  }
}
<br/>