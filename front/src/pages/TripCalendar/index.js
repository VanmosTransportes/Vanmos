import React, { Component } from 'react';
import CalendarPicker from 'react-native-calendar-picker';

import {
  Container,
  SignOutButton,
  SignOutButtonText
} from './styles'

export default class App extends Component {
  render() {
    const minDate = new Date(2019, 11, 11); // Min date
    const maxDate = new Date(2050, 6, 3); // Max date
    const {navigate} = this.props.navigation; 
    return (
      <Container>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          weekdays={['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']}
          months={[
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abril',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outobro',
            'Novembro',
            'Dezembro',
          ]}
          previousTitle="Anterior"
          nextTitle="Próximo"
          todayBackgroundColor="#e6ffe6"
          selectedDayColor="red"
          selectedDayTextColor="#000000"
          scaleFactor={375}
          textStyle={{
            fontFamily: 'Cochin',
            color: '#000000',
          }}
        />
        <SignOutButton onPress={() => navigate('Main', {type: 'passenger'})}>
          <SignOutButtonText>Voltar</SignOutButtonText>
        </SignOutButton>
      </Container>
    );
  }
}