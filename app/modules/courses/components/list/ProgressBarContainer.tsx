import React from 'react';
import { 
  View, 
  Text,
  Image,
} from 'react-native';
import { IProgressBar } from '../../interfaces/components/index';
import StyleClass from '../../StyleClass';

const ProgressBarContainer = ({
  progress,
}: IProgressBar): JSX.Element => (
  <View style={StyleClass.listProgressBar}>
    <View style={[StyleClass.listProgressBarFilled, {width: progress}]}>
    </View>
  </View>
);

export default ProgressBarContainer;
