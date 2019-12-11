import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  background-color: #ffc107;
`;

export const Text = styled.Text`
  margin-left: 18px;
  margin-right: 18px;
  margin-top: 15px;
  font-size: 15px;
  font-style: italic;
  color: #000;
  flex-direction: row;
  flex: 15px;
`;

export const Title =  styled.Text`
  color: #000;
  margin-top: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 23px;
  font-style: italic;
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: #000;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 13px;
`;