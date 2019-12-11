import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

export const Container = styled(Animated.ScrollView)`
`;

export const Nav = styled.View`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: #000;
  margin-right: 15px;
  margin-left: 15px;
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: #000;
`;

export const NavText = styled.Text`
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
  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
`;

export const SignOutButtonText = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 15px;
`;