import React, { Component } from 'react';
import { 
    Header,
    Content,
    DatePicker,
    Text,
    Body
} from 'native-base';

import { 
  Container,
  Title
} from './styles/marcarViagemPassageiro'
import HeaderPassageiro from '../components/Header/index'

class DatePickerExample extends Component {
  static navigationOptions = {
      title: 'PerfilPassageiro',
      header: null
  }  
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#ECBF06'}}>
                <Body style={{alignItems: "center"}}>
                    <Title style={{color: "black"}}>Vanmos</Title>
                </Body>
        </Header>
        <HeaderPassageiro />
        <Title>Solicite sua viagem</Title>
        <Content>
          <DatePicker
            defaultDate={new Date(2019, 4, 4)}
            minimumDate={new Date(2019, 1, 1)}
            maximumDate={new Date(2019, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText="Data para a viagem..."
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{ color: "#000000" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Data da Viagem: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
        </Content>
      </Container>
    );
  }
}

export default DatePickerExample