import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

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