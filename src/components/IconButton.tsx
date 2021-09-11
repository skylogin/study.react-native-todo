import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { images } from '../images';

const Icon = styled.Image<{source: string}>`
  tint-color: ${(props) => props.theme.main};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

interface IProps{
  type: string;
  onPressOut: () => void;
}

const IconButton: React.FC<IProps> = ({
  type,
  onPressOut,
}) => {
  return (
    <TouchableOpacity onPressOut={onPressOut}>
      <Icon source={type} />
    </TouchableOpacity>
  );
};

export default IconButton;