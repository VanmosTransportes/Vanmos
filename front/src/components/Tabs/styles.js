import styled from 'styled-components/native';
import { Animated } from 'react-native'

export const Container = styled(Animated.View)`
  height: 350px;
  padding-top: 5px;
`;

export const TabsContainer = styled.ScrollView.attrs({
    horizontal: true, 
    contentContainerStyle: { paddingLeft: 5, paddingRight: 20 },
    showsHorizontalScrollIndicator: false, 
})``;

export const TabItem = styled.View`
    width: 320px;
    height: 340px;
    background: rgba(255, 255, 255, 0.2);
    margin-left: 10px;
    padding: 10px;
`;

export const TabText = styled.Text`
    font-size: 13px;
    color: #000;
`;