import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Icon = styled.Image<{source: string, completed: boolean}>`
  tint-color: ${({ theme, completed }) => completed? theme.done: theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

interface IProps{
  type: string;
  id: string;
  onPressOut?: (id: string) => void;
  completed?: boolean;
}

const IconButton: React.FC<IProps> = ({
  type,
  id,
  onPressOut = Function,
  completed = false,
}) => {

  const _onPressOut = () =>  {
    onPressOut(id);
  }


  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} completed={completed} />
    </TouchableOpacity>
  );
};




export default IconButton;