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
  const utype = props.utype

  const RenderPassenger = () => (
    <>
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
    </>
  )

  const RenderOwner = () => (
    <>
      <ListItem onPress={() => navigate('CreateDriver', { navigation: props.navigation })}>
        <ListText>Cadastrar Motorista</ListText>
        <Icon name="keyboard-arrow-right" size={20} color="#000" />
      </ListItem>
      
      <ListItem onPress={() => navigate('CreateVeicule', { navigation: props.navigation })}>
        <ListText>Cadastrar Veiculo</ListText>
        <Icon name="keyboard-arrow-right" size={20} color="#000" />
      </ListItem>

      <ListItem onPress={() => navigate('Help', {utype: props.utype})}>
        <ListText>Listar Motoristas</ListText>
        <Icon name="keyboard-arrow-right" size={20} color="#000" />
      </ListItem>

      <ListItem onPress={() => navigate('Help', {utype: props.utype})}>
        <ListText>Listar Veiculos</ListText>
        <Icon name="keyboard-arrow-right" size={20} color="#000" />
      </ListItem>
    </>
  )

  return(
    <List>
      
      {utype.includes('passenger') && <RenderPassenger />}

      {utype.includes('owner') && <RenderOwner />}


      <SignOutButton onPress={() => navigate('Login')} >
        <SignOutButtonText>Sair do App</SignOutButtonText>
      </SignOutButton>
    </List>
  );
}
