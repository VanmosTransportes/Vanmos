import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 0px 0 20px;
`;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Photo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #000000;
  font-weight: bold;
  margin-left: 20px;
`;
