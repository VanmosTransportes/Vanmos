import React from 'react'
import { Container, Top, Logo, Title } from './styles';
import logo from '~/assets/Logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Header(){
    return(
        <Container>
            <Top>
                <Logo source={logo} />
            </Top>
            <Title>Vanmos</Title>
        </Container>
    );
}