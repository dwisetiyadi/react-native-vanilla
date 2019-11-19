/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { Component } from 'react';
import {
  BackHandler, View, Alert, Platform,
} from 'react-native';
import { connect } from 'react-redux';
import Router from '../Router';
import RouterConfig from '../../config/Router';
import NavigationService from '../NavigationService';
import { setScreen } from './ActionContainer';
import _ from '../../lang';

import Styles from '../../styles';

interface props {
  action: any,
  prevScreen: any,
  thisScreen: any,
  setScreen: any
}

class ViewContainer extends Component<props> {
  state = {
    action: this.props.action,
    prevScreen: this.props.prevScreen,
    thisScreen: this.props.thisScreen,
  }

  static getDerivedStateFromProps(nextProps: any) {
    if (nextProps.action === 'Navigation/NAVIGATE' || nextProps.action === 'Navigation/BACK') {
      return {
        action: nextProps.action,
        prevScreen: nextProps.prevScreen,
        thisScreen: nextProps.thisScreen,
      };
    }

    return null;
  }

  componentDidUpdate() {
    if (this.state.action === 'Navigation/BACK') {
      const exitAppWhiteListScreen = RouterConfig.exitAppWhiteListScreen.indexOf(this.state.thisScreen);
      if (exitAppWhiteListScreen >= 0) {
        if (Platform.OS === 'ios') {
          NavigationService.navigate(this.state.prevScreen, '');
        } else if (Platform.OS === 'android') {
          Alert.alert(
            '',
            _('Anda yakin ingin keluar aplikasi?', ''),
            [
              {
                text: _('Tidak', ''),
                onPress: () => {
                  NavigationService.navigate(this.state.prevScreen, '');
                },
              },
              {
                text: _('Ya', ''),
                onPress: () => {
                  BackHandler.exitApp();
                },
              },
            ],
          );
        }
      }
    }
  }

  render() {
    return (
      <View style={Styles.Main.container}>
        <Router
          ref={(ref) => {
            NavigationService.setTopLevelNavigator(ref);
          }}
          onNavigationStateChange={(prevState, currentState, action) => {
            if (action.type === 'Navigation/NAVIGATE' || action.type === 'Navigation/BACK') {
              this.props.setScreen({
                action: action.type,
                prevScreen: NavigationService.getRouteName(prevState),
                thisScreen: NavigationService.getRouteName(currentState),
              });
            }
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  action: state.bootstrap.action,
  prevScreen: state.bootstrap.prevScreen,
  thisScreen: state.bootstrap.thisScreen,
});
const mapDispatchToProps = (dispatch: any) => ({
  setScreen: (value: any) => dispatch(setScreen(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
