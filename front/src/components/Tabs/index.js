import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, TabsContainer, TabText, TabItem } from './styles';
import List from '../List/index'

import json from '../../services/routes'

export default function Tabs(){
    return(
       <Container>
           <TabsContainer>
               <TabItem>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
                         <Icon name="list" size={24}  color="#000" />
                         <TabText>Rota atual</TabText>
                    </View>
                    <List />
               </TabItem>
               <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#000" />
                    <TabText>Rotas</TabText>
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