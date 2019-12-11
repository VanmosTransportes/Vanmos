import styled from 'styled-components/native';
import { Animated } from 'react-native'

export const Container = styled.View`
  flex: 1;
  background: #ffc107;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  max-height: 450px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #FFF;
  border-radius: 4px;
  height: 120%;
  position: absolute;
  left: 8;
  right: 0;
  top: 0px;
  width: 95%;
  overflow: hidden;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
  align-items: center;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`;

export const Annotation = styled.Text`
  font-size: 12px;
  color: #333;

`;