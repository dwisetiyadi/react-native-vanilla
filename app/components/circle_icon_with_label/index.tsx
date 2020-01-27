import React from 'react';
import {
  View, 
  Image,
  Text,
} from 'react-native';
import Styles from './StyleCircleIconWithLabel';
import { ICircleIconWithLabel } from './interfaces';
import CircleIcon from '../circle_icon'

const CircleIconWithLabel = ({styleContainer, styleIconWrapper, styleIcon, sourceIconImage, label }: ICircleIconWithLabel): JSX.Element => {
  return  <View style={[Styles.container, styleContainer]}>
            <CircleIcon 
              stylesContainer={[Styles.iconWrapper, styleIconWrapper]}
              stylesIcon={[Styles.icon, styleIcon]}
              icon={sourceIconImage}
            />
            <Text style={Styles.label}>{label}</Text>
          </View>
}

export default CircleIconWithLabel;