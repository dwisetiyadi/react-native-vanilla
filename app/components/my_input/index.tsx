/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { TextInput } from 'react-native';
import StyleMyInput from './StyleMyInput';
import { IMyInput } from './interfaces';

const MyInput = ({ style, ...props }: IMyInput): JSX.Element => (
  <TextInput
    underlineColorAndroid="transparent"
    style={[StyleMyInput, style]}
    {...props}
  />
);

export default MyInput;
