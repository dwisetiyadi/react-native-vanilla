/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { TextInput } from 'react-native';

const MyInput = ({ style, ...props }) => (
  <TextInput
    underlineColorAndroid="transparent"
    style={[inputStyle, style]}
    {...props}
  />
);

const inputStyle = {
  borderBottomWidth: 0.5,
  borderBottomColor: '#AAA',
  fontSize: 16,
};

export default MyInput;
