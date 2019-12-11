import React from 'react'

import {
  List,
  ListItem,
  ListText,
  SignOutButton,
  SignOutButtonText
} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Menu( props ){
  const { navigate } = props.navigation
  return(
    <List>
      <ListItem onPress={() => {}}>
        <ListText>Menu</ListText>
        <Icon name="keyboard-arrow-right" size={20} color="#000" />
      </ListItem>
      
      <ListItem onPress={() => navigate('VanList', { navigation: props.navigation })}>
        <ListText>Procurar Van</ListText>
        <Icon name="keyboard-arrow-right" size={20} color="#000" />
      </ListItem>
      
      <ListItem onPress={() => navigate('TripCalendar')}>
        <ListText>Datas de Viagens</ListText>
        <Icon name="keyboard-arrow-right" size={20} color="#000" />
      </ListItem>

      <ListItem onPress={() => navigate('Help', {utype: props.utype})}>
        <ListText>Ajuda</ListText>
        <Icon name="keyboard-arrow-right" size={20} color="#000" />
      </ListItem>

      <SignOutButton onPress={() => navigate('Login')} >
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </List>
  );
}
