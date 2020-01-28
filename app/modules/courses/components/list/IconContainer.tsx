import React from 'react';
import { 
  View, 
  Text,
  Image,
} from 'react-native';
import { IIcon } from '../../interfaces/components/index';
import StyleClass from '../../StyleClass';

const IconContainer = ({
  icon,
}: IIcon): JSX.Element => (
  <View style={StyleClass.viewIconBorder}>
    <Image style={StyleClass.viewIcon} source={{uri:icon}}/>
  </View>
);

export default IconContainer;
