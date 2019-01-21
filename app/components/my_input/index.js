/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { TextInput } from 'react-native';
import StyleMyInput from './StyleMyInput';

const MyInput = ({ style, ...props }) => (
  <TextInput
    underlineColorAndroid="transparent"
    style={[StyleMyInput, style]}
    {...props}
  />
);

export default MyInput;
