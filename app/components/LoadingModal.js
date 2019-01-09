/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import {
  View, Modal, StyleSheet, Animated, Easing,
} from 'react-native';
import { Colors } from '../theme/Styles';
import Loading from '../assets/images/loading.png';

export default class LoadingModal extends React.Component {
  spinValue = new Animated.Value(0);

  componentDidMount() {
    this.spin();
  }

  spin() {
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
        <View style={styleLoadingModal.container}>
          <Animated.Image
            style={[styleLoadingModal.loading, { transform: [{ rotate: spin }] }]}
            source={Loading}
          />
        </View>
      </Modal>
    );
  }
}
const styleLoadingModal = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.loadingModal.background,
  },
  loading: {
    width: 120,
    height: 120,
  },
});
