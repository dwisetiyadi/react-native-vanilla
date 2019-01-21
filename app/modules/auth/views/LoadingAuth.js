/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  View, AsyncStorage,
} from 'react-native';
import MyStatusBar from '../../../components/my_status_bar';
import { LOGGEDIN } from '../ConfigAuth';
import LoadingModal from '../../../components/loading_modal';

const initialState = {
  showLoadingModal: false,
};

class loading extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  async componentDidMount() {
    await this.setState({ showLoadingModal: true });
    const condition = await AsyncStorage.getItem('condition');
    switch (condition) {
      case LOGGEDIN:
        await this.setState({ showLoadingModal: false });
        this.props.navigation.navigate('App');
        break;

      default:
        await this.setState({ showLoadingModal: false });
        this.props.navigation.navigate('Auth');
        break;
    }
  }

  render() {
    return (
      <View>
        <MyStatusBar />
        <LoadingModal show={this.state.showLoadingModal} />
      </View>
    );
  }
}

export default loading;
