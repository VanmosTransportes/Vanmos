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

import HeaderPassageiro from '../components/Header/index'

const dataArray = [
  { title: "Placa do veículo: ABC-123", content: "Origem: Agência Mirum /  Destino: Unifacear" },
  { title: "Placa do veículo: DEF-456", content: "Origem: Shopping Palladium /  Destino: UFPR" },
  { title: "Placa do veículo: GHI-789", content: "Origem: Terminal Pinheirinho /  Destino: IFPR" },
  { title: "Placa do veículo: JKL-101", content: "Origem: Agência GHFly /  Destino: Positivo" },
  { title: "Placa do veículo: MNO-112", content: "Origem: Terminal Capão Raso /  Destino: Santa Cruz" },
  { title: "Placa do veículo: PQR-131", content: "Origem: Terminal Capão Raso /  Destino: Uniandrade" }
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
        <HeaderPassageiro style={{backgroundColor: '#ECBF06'}}>
                    <Body style={{alignItems: "center"}}>
                        
                    </Body>
        </HeaderPassageiro>
        <Title>Listas de Frotas</Title>
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