/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { Component } from 'react';
import {
  View, AsyncStorage,
} from 'react-native';
import MyStatusBar from '../../../components/my_status_bar';
import { LOGGEDIN } from '../ConfigAuth';
import LoadingModal from '../../../components/loading_modal';

const initialState = {
  showLoadingModal: false,
};

interface props {
  navigation: any
}

interface states {
  showLoadingModal: any
}

class loading extends Component<props, states> {
  constructor(props: any) {
    super(props);
    this.state = initialState;
  }

  async componentDidMount() {
    await this.setState({ showLoadingModal: true });
    const condition = await AsyncStorage.getItem('condition');
    switch (condition) {
      case LOGGEDIN:
        await this.setState({ showLoadingModal: false });
        this.props.navigation.navigate('UserList');
        break;

      default:
        await this.setState({ showLoadingModal: false });
        this.props.navigation.navigate('SignIn');
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
