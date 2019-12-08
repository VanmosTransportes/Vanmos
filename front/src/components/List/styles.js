import styled from 'styled-components/native';
import { StyleSheet, Animated } from 'react-native'

export const List = styled.View`
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(0, 0, 0, 0.8);
`;

export const ListItem = styled(Animated.View)`
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(0, 0, 0, 0.8);
`;

export const ListIcon = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 40px;
  margin-right: 15px;
`;

export const ListText = styled.Text`
  font-size: 15px;
  color: #000;
`;

export const ListArrow = styled.View`
  position: absolute;
  right: 0;
`;