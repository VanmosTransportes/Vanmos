import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TabsContainer, TabText, TabItem } from './styles';
import List from '../List/index'

import { route, routeList } from '../../services/db'

export default function Tabs(){
    return(
       <Container>
           <TabsContainer>
               <TabItem>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                         <Icon name="list" size={25} color="#000" />
                         <TabText>Rota - Mirum</TabText>
                    </View>
                    <List list={route.slice(1)} icon={true} />
               </TabItem>
               <TabItem>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                         <Icon name="list" size={25} color="#000" />
                         <TabText>Rotas</TabText>
                    </View>
                    <List list={routeList} />
               </TabItem>
               <TabItem>
                    <Icon name="arrow-downward" size={24} color="#000" />
                    <TabText>Depositar</TabText>
               </TabItem>
               <TabItem>
                    <Icon name="arrow-upward" size={24} color="#000" />
                    <TabText>Transferir</TabText>
               </TabItem>
               <TabItem>
                    <Icon name="lock" size={24} color="#000" />
                    <TabText>Bloquear Cartão</TabText>
               </TabItem>
           </TabsContainer>
       </Container>
    );
}