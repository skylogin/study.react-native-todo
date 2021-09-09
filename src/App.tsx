import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import { theme } from './theme';

import Input from './components/Input';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => theme.background};
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => theme.main};
  align-self: flex-start;
  margin: 0px 20px;
`;




const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={theme.background} />
        <Title>Todo List</Title>
        <Input placeholder="+ Add a Task" />
      </Container>
    </ThemeProvider>
  );
}


export default App;