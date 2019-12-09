import React from 'react'
import { Image } from 'react-native'
// import { Container, Title } from './styles'

import { Container, Top, Photo, Title } from './styles';

export default function Header(props){
    return(
        <Container>
            <Top>
                <Photo source={props.photo} />
                <Title>{props.name}</Title>
            </Top>
        </Container>
    );
}

Header.defaultProps = {
    name: 'Matheus Dalenga',
    photo: {uri: 'https://pbs.twimg.com/profile_images/811219631956434945/B4aEclkP.jpg'}
}