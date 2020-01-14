/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import {
  Platform, TouchableWithoutFeedback, View, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleNews from '../StyleUsers';
import { Colors } from '../../styles/Styles';
import { 
  ISearchIcon,
  IBackIcon,
  IForwardIcon,
  ICloseIcon, 
} from '../interfaces/components';

export const SearchIcon = ({ onPress }: ISearchIcon): JSX.Element => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={StyleNews.iconContainer}>
      <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} size={20} color={Colors.blue} />
    </View>
  </TouchableWithoutFeedback>
);

export const BackIcon = ({ onPress, active, ...props }: IBackIcon): JSX.Element => (
  <TouchableOpacity onPress={onPress} {...props}>
    <Icon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={20} color={active === true ? Colors.blue : Colors.gray} />
  </TouchableOpacity>
);

export const ForwardIcon = ({ onPress, active, ...props }: IForwardIcon): JSX.Element => (
  <TouchableOpacity onPress={onPress} {...props}>
    <Icon name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'} size={20} color={active === true ? Colors.blue : Colors.gray} />
  </TouchableOpacity>
);

export const CloseIcon = ({ onPress }: ICloseIcon): JSX.Element => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} size={40} color={Colors.blue} />
  </TouchableOpacity>
);
