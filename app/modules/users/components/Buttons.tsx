/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import StyleNews from '../../../components/button/StyleButton';

export const SearchButton = (
  onPress: any, label: any, containerStyle: any, labelStyle: any, ...props: any
) => (
  <TouchableOpacity
    style={[StyleNews.buttonContainer, containerStyle]}
    onPress={onPress}
    {...props}
  >
    <Text style={[StyleNews.text, labelStyle]}>
      {label}
    </Text>
  </TouchableOpacity>
);
