/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import {
  View, Modal, Animated, Easing,
} from 'react-native';
import StyleLoadingModal from './StyleLoadingModal';
import Loading from '../../assets/images/loading.png';
import { IProps } from './interfaces';

class LoadingModal extends React.Component<IProps, {}> {
  spinValue = new Animated.Value(0);

  constructor(props: IProps) {
    super(props);
    
  }

  componentDidMount() {
    this.spin();
  }

  spin() : void {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
      },
    ).start(() => this.spin());
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-360deg'],
    });
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.props.show}
        onRequestClose={() => {}}
      >
        <View style={StyleLoadingModal.container}>
          <Animated.Image
            style={[StyleLoadingModal.loading, { transform: [{ rotate: spin }] }]}
            source={Loading}
          />
        </View>
      </Modal>
    );
  }
}

export default LoadingModal;
