import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

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

export const ContentView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const ListItem = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between
  padding: 5px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.8);
`;

export const ListText = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const ListSubItem = styled(Animated.View)`
  align-items: center;
  background-color: white;
`;
  
  export const ListSubText = styled.Text`
  font-size: 15px;
  color: #000;
  height: 30px;
  margin-top: 10px;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #040304;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #040304;
  font-weight: bold;
  font-size: 13px;
`;