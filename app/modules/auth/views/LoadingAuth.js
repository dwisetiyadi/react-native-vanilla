/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  View, AsyncStorage,
} from 'react-native';
import { LOGGEDIN } from '../ConfigAuth';
import LoadingModal from '../../../components/LoadingModal';

const initialState = {
  showLoadingModal: false,
};

class loading extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  async componentDidMount() {
    this.setState({ showLoadingModal: true });
    const condition = await AsyncStorage.getItem('condition');
    switch (condition) {
      case LOGGEDIN:
        this.setState({ showLoadingModal: false });
        this.props.navigation.navigate('App');
        break;

      default:
        this.setState({ showLoadingModal: false });
        this.props.navigation.navigate('Auth');
        break;
    }
  }

  render() {
    return (
      <View>
        <LoadingModal show={this.state.showLoadingModal} />
      </View>
    );
  }
}

export default loading;
