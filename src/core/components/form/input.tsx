import React from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface IProps extends TextInputProps {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const Input: React.FC<IProps> = ({
  label,
  style,
  labelStyle,
  inputStyle,
  ...props
}) => {
  return (
    <View style={style}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput {...props} style={inputStyle} />
    </View>
  );
};
