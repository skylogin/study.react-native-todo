import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import { theme } from './theme';
import { images } from './images';

import Input from './components/Input';
import IconButton from './components/IconButton';
import Task from './components/Task';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.background};
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

const List = styled.ScrollView<{ width: number }>`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;




const App: React.FC = () => {
  const [newTask, setNewTask] = useState('');

  const _addTask = () => {
    alert(`Add: ${newTask}`);
    setNewTask('');
  }

  const _handleTextChange = (text: string) => {
    setNewTask(text);
  }

  const width = Dimensions.get('window').width;

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor={theme.background} />
        <Title>Todo List</Title>
        <Input 
          placeholder="+ Add a Task" 
          value={newTask}
          onChangeText={_handleTextChange}
          onSubmitEditing={_addTask}
        />
        <List width={width}>
          <Task text="Hanbit" />  
          <Task text="React Native" />
          <Task text="React Native Sample" />
          <Task text="Edit TODO item" />
        </List>
      </Container>
    </ThemeProvider>
  );
}


export default App;