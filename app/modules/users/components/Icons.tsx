/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import {
  Platform, TouchableWithoutFeedback, View, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import StyleNews from '../StyleUsers';
import Colors from '../../../styles/Colors';

export const SearchIcon = ( onPress: any ) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={StyleNews.iconContainer}>
      <Icon name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'} size={20} color={Colors.blue} />
    </View>
  </TouchableWithoutFeedback>
);

export const BackIcon = ( onPress: any, active: any, ...props: any ) => (
  <TouchableOpacity onPress={onPress} {...props}>
    <Icon name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'} size={20} color={active === true ? Colors.blue : Colors.gray} />
  </TouchableOpacity>
);

export const ForwardIcon = ( onPress: any, active: any, ...props: any ) => (
  <TouchableOpacity onPress={onPress} {...props}>
    <Icon name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'} size={20} color={active === true ? Colors.blue : Colors.gray} />
  </TouchableOpacity>
);

export const CloseIcon = ( onPress: any ) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'} size={40} color={Colors.blue} />
  </TouchableOpacity>
);
