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

const Contents = styled.Text`
  flex: 1;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
`;

interface IProps{
  item: {id: string, text: string, completed: boolean};
  deleteTask: (id: string) => void;
};

const Task: React.FC<IProps> = ({
  item,
  deleteTask,
}) => {
  return (
    <Container>
      <IconButton type={images.uncompleted} id={item.id} />
      <Contents>
        {item.text}
      </Contents>
      <IconButton type={images.update} id={item.id} />
      <IconButton type={images.delete} id={item.id} onPressOut={deleteTask} />
    </Container>
  )
};

export default Task;