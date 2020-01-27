import React from 'react';
import {
  View,
  Image
} from 'react-native';
import Styles from './StyleCricleIcon';
import { ICircleIcon } from './interfaces';

const CircleIcon = ({icon, stylesContainer, stylesIcon, isHasNotif}: ICircleIcon): JSX.Element => (
  <View 
    style={[Styles.container, stylesContainer]}
  >
    <Image 
      style={[Styles.icon, stylesIcon]}
      source={icon || {uri: icon}}
    />
    {
      isHasNotif  && 
      <View 
        style={Styles.notif}
      />
    }
  </View>
)

export default CircleIcon;




