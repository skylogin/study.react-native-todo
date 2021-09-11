import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.main
}))<{ width: number }>`
  width: ${(props) => props.width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.itemBackground};
  font-size: 25px;
  color: ${({ theme }) => theme.text};
`;


export type IProps = {
  placeholder?: string;
  value: string;
  autoFocus?: boolean;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
};

const Input: React.FC<IProps> = ({
  placeholder,
  value,
  autoFocus,
  onChangeText,
  onSubmitEditing,
}) => {
  const width = Dimensions.get('window').width;

  return (
    <StyledInput
      width={width} 
      autoFocus={autoFocus}
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