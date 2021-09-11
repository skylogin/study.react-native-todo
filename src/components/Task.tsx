import React from 'react';
import styled from 'styled-components/native';
import { images } from '../images';
import IconButton from './IconButton';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.itemBackground};
  border-radius: 10px;
  padding: 5px;
  margin: 3px 0px;
`;

const Contents = styled.Text<{ completed: boolean }>`
  flex: 1;
  font-size: 24px;
  color: ${({ theme, completed }) => completed? theme.done: theme.text};
  text-decoration-line: ${({ completed }) => completed? 'line-through': 'none'};
`;

interface IProps{
  item: {id: string, text: string, completed: boolean};
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

const Task: React.FC<IProps> = ({
  item,
  deleteTask,
  toggleTask,
}) => {
  return (
    <Container>
      <IconButton 
        type={item.completed? images.completed: images.uncompleted} 
        id={item.id} 
        onPressOut={toggleTask} 
        completed={item.completed}
      />
      <Contents completed={item.completed}>
        {item.text}
      </Contents>
      {item.completed || <IconButton type={images.update} id={item.id} />}
      <IconButton 
        type={images.delete} 
        id={item.id} 
        onPressOut={deleteTask} 
        completed={item.completed}
      />
    </Container>
  )
};

export default Task;