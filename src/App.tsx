import React, { useState } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';
import AsyncStorage from '@react-native-community/async-storage';
import AppLoading from 'expo-app-loading';

import { theme } from './theme';

import Input from './components/Input';
import Task from './components/Task';

import type { TaskProps } from './types/task';



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

// task에 대한 타입을 지정하였으나 hooks와 충돌이 일어남
// TODO: 이후 useState와 충돌되지 않도로 수정해 볼것
interface ITask {
  [id: string]: TaskProps
}


const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState({});

  const _saveTasks = async (tasks: ITask) => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      setTasks(tasks);
    } catch(e){
      console.error(e);
    }
  };

  const _loadTasks = async () => {
    const loadedTasks = await AsyncStorage.getItem('tasks');
    setTasks(JSON.parse(loadedTasks || '{}'));
  };

  const _addTask = () => {
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: { id: ID, text: newTask, completed: false },
    };
    setNewTask('');
    _saveTasks({ ...tasks, ...newTaskObject });
  }

  const _deleteTask = (id: string) => {
    const currentTasks: any = Object.assign({}, tasks);
    delete currentTasks[id];
    _saveTasks(currentTasks);
  }

  const _toggleTask = (id: string) => {
    const currentTasks: any = Object.assign({}, tasks);
    currentTasks[id]['completed'] = !currentTasks[id]['completed'];
    _saveTasks(currentTasks);
  }

  const _updateTask = (item: TaskProps) => {
    const currentTasks: any = Object.assign({}, tasks);
    currentTasks[item.id] = item;
    _saveTasks(currentTasks);
  }

  const _handleTextChange = (text: string) => {
    setNewTask(text);
  }

  const _onBlur = () => {
    setNewTask('');
  }

  const width = Dimensions.get('window').width;

  return (
    isReady? (
      <ThemeProvider theme={theme}>
        <Container>
          <StatusBar barStyle="light-content" backgroundColor={theme.background} />
          <Title>Todo List</Title>
          <Input 
            placeholder="+ Add a Task" 
            value={newTask}
            onBlur={_onBlur}
            onChangeText={_handleTextChange}
            onSubmitEditing={_addTask}
          />
          <List width={width}>
            {Object.values(tasks)
              .reverse()
              //TODO: any타입을 변경할 것 (asyncStorage넣고 타입지정을 해야만 했음)
              .map((item:any) => {
                return (
                  <Task 
                    key={item.id} 
                    item={item} 
                    deleteTask={_deleteTask}
                    toggleTask={_toggleTask}
                    updateTask={_updateTask}
                  />
                );  
              })}
          </List>
        </Container>
      </ThemeProvider>
    ) : (
      <AppLoading
        startAsync={_loadTasks}
        onFinish={() => setIsReady(true)}
        onError={console.error}
      />
    )
  );
}


export default App;