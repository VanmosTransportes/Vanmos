import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TabsContainer, TabText, TabItem } from './styles';
import List from '../List/index'
import Profile from '../../pages/Profile/index'
import Menu from '../../pages/Menu/index'

import { route, routeList } from '../../services/db'

export default function Tabs(props){
  const { navigate } = props.navigation
  const utype = props.utype
  return(
    <Container>
      <TabsContainer>

        {
          utype.includes('driver')
          &&
          <TabItem>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
              <Icon name="list" size={25} color="#000" />
              <TabText>Rota - Konoha</TabText>
            </View>
            <List list={route.slice(1)} icon={true} />
          </TabItem>
        }
        
        {
        !utype.includes('driver')
          &&
        <TabItem>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <Icon name="list" size={25} color="#000" />
            <TabText>Menu</TabText>
          </View>
          <Menu navigation={props.navigation} utype={utype}/>
        </TabItem>
        }

        {
          utype.includes('driver')
          &&
          <TabItem>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
              <Icon name="list" size={25} color="#000" />
              <TabText>Rotas</TabText>
            </View>
            <List list={routeList} />
          </TabItem>
        }
        
        <TabItem>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <Icon name="person" size={25} color="#000" />
            <TabText>Meu Perfil</TabText>
          </View>
          <Profile navigation={props.navigation} utype={utype} />
        </TabItem>
      

      </TabsContainer>
    </Container>
  );
}