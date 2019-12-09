import styled from 'styled-components/native';
import { Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  background-color: #ffc107;
`;

export const Title =  styled.Text`
    color: #000;
    margin-top: 30px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 20px;
    font-style: italic;
`;


