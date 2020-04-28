/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import {
  View, AsyncStorage,
} from 'react-native';
import MyStatusBar from '../../../components/my_status_bar';
import { LOGGEDIN } from '../ConfigAuth';
import LoadingModal from '../../../components/loading_modal';
import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';
import { 
  ILoadingBinusAuthProps,
  ILoadingBinusAuthState,
} from '../interfaces/views';

const initialState: ILoadingBinusAuthState = {
  showLoadingModal: false,
};
class BinusLoading extends React.Component<ILoadingBinusAuthProps, ILoadingBinusAuthState> {
  constructor(props: ILoadingBinusAuthProps) {
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

export default BinusLoading;
