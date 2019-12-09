import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
  background-color: #ffc107;
`;

export const Nav = styled.View`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #040304;
  margin: 30px;
  margin-bottom: 5px;
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #040304;
`;

export const NavText = styled.Text`
  font-size: 15px;
  color: #040304;
  margin-left: 20px;
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

export const Photo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;



