import styled from 'styled-components/native';
import { StyleSheet } from 'react-native'

export const List = styled.View`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(0, 0, 0, 0.8);
`;

export const ListItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 7px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.8);
`;

export const ListText = styled.Text`
  font-size: 15px;
  color: #000;
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