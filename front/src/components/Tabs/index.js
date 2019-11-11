import React from 'react'
import { Container, TabsContainer, TabItem, TabText } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Tabs({ translateY }){
    return(
       <Container>
           <TabsContainer>
               <TabItem>
                    <Icon name="person" size={24} color="#FFF" />
                    <TabText>Perfil</TabText>
               </TabItem>
               <TabItem>
                    <Icon name="chat-bubble-outline" size={24} color="#FFF" />
                    <TabText>Rotas</TabText>
               </TabItem>
               <TabItem>
                    <Icon name="arrow-downward" size={24} color="#FFF" />
                    <TabText>Depositar</TabText>
               </TabItem>
               <TabItem>
                    <Icon name="arrow-upward" size={24} color="#FFF" />
                    <TabText>Transferir</TabText>
               </TabItem>
               <TabItem>
                    <Icon name="lock" size={24} color="#FFF" />
                    <TabText>Bloquear Cartão</TabText>
               </TabItem>
           </TabsContainer>
       </Container>
    );
}