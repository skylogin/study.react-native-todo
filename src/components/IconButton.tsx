import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const Icon = styled.Image<{source: string}>`
  tint-color: ${({ theme }) => theme.main};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

interface IProps{
  type: string;
  id: string;
  onPressOut?: (id: string) => void;
}



const IconButton: React.FC<IProps> = ({
  type,
  id,
  onPressOut = Function,
}) => {

  const _onPressOut = () =>  {
    onPressOut(id);
  }


  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} />
    </TouchableOpacity>
  );
};




export default IconButton;