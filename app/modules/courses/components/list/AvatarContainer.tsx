import React from 'react';
import { 
  Image,
} from 'react-native';
import { IAvatar } from '../../interfaces/components/index';
import StyleClass from '../../StyleClass';

const AvatarContainer = ({
  avatar,
}: IAvatar): JSX.Element => (
  <Image style={StyleClass.viewLecturerPhoto} source={{uri:avatar}}/>
);

export default AvatarContainer;
