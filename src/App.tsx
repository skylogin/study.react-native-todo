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
  const [tasks, setTasks] = useState({
    '1': { id: '1', text: 'RN Todo', completed: false },
    '2': { id: '2', text: 'Design Layout', completed: true },
    '3': { id: '3', text: 'Add TODO item', completed: false },
    '4': { id: '4', text: 'Edit TODO item', completed: false },
  });

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    setTasks({ ...tasks, ...newTaskObject });
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
          {Object.values(tasks)
            .reverse()
            .map(item => (
              <Task key={item.id} text={item.text} />
            ))}
        </List>
      </Container>
    </ThemeProvider>
  );
}


export default App;