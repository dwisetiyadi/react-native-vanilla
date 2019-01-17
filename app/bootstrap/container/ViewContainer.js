/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import { BackHandler, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import Router from '../Router';
import NavigationService from '../NavigationService';
import { setScreen } from './ActionContainer';

import styles from '../../theme/Styles';

class ViewContainer extends Component {
  state = {
    action: this.props.action,
    prevScreen: this.props.prevScreen,
    currentScreen: this.props.currentScreen,
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.action === 'Navigation/NAVIGATE' || nextProps.action === 'Navigation/BACK') {
      return {
        action: nextProps.action,
        prevScreen: nextProps.prevScreen,
        currentScreen: nextProps.currentScreen,
      };
    }

    return null;
  }

  componentDidUpdate() {
    if (this.state.action === 'Navigation/BACK') {
      if (this.state.currentScreen === Router.settings.initialRouteName) {
        Alert.alert(
          '',
          'Are you sure want to close this app?',
          [
            {
              text: 'No',
              onPress: () => {
                NavigationService.navigate(this.state.prevScreen);
              },
            },
            {
              text: 'Yes',
              onPress: () => {
                BackHandler.exitApp();
              },
            },
          ],
        );
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Router.AppContainer
          ref={(ref) => {
            NavigationService.setTopLevelNavigator(ref);
          }}
          onNavigationStateChange={(prevState, currentState, action) => {
            if (action.type === 'Navigation/NAVIGATE' || action.type === 'Navigation/BACK') {
              this.props.setScreen({
                action: action.type,
                previous: NavigationService.getRouteName(prevState),
                current: NavigationService.getRouteName(currentState),
              });
            }
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  action: state.screen.action,
  prevScreen: state.screen.previous,
  currentScreen: state.screen.current,
});
const mapDispatchToProps = dispatch => ({
  setScreen: value => dispatch(setScreen(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewContainer);
