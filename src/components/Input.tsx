import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../theme';

const StyledInput = styled.TextInput.attrs(() => ({
  placeholderTextColor: theme.main
}))<{ width: number }>`
  width: ${(props) => props.width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${(props) => theme.itemBackground};
  font-size: 25px;
  color: ${(props) => theme.text};
`;


export type Props = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
};

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
}) => {
  const width = Dimensions.get('window').width;

  return (
    <StyledInput 
      width={width} 
      placeholder={placeholder} 
      maxLength={50} 
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      keyboardAppearance="dark"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default Input;