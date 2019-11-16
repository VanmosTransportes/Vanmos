import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  padding: 0px 0 20px;
`;

export const ListItem = styled.View`
  flex-direction: row;
  margin-bottom: 3px;
  border-bottom-width: 1px;
  border-bottom-color: black;
    
`;

export const Photo = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 40px;
`;

export const Text = styled.Text`
  font-size: 15px;
  color: #000000;
  font-weight: bold;
  margin: 6px 10px;
  justify-content: center;
`;
