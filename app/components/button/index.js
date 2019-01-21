/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import StyleButton from './StyleButton';

export const NormalButton = ({
  onPress,
  text,
  containerStyle,
  textStyle,
}) => (
  <TouchableOpacity onPress={onPress} style={[StyleButton.buttonContainer, StyleButton.normal, containerStyle]}>
    <Text style={[StyleButton.text, textStyle]}>
      {text.toUpperCase()}
    </Text>
  </TouchableOpacity>
);

export const DangerButton = ({
  onPress,
  text,
  containerStyle,
  textStyle,
}) => (
  <TouchableOpacity onPress={onPress} style={[StyleButton.buttonContainer, StyleButton.danger, containerStyle]}>
    <Text style={[StyleButton.text, textStyle]}>
      {text.toUpperCase()}
    </Text>
  </TouchableOpacity>
);
