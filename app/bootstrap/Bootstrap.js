/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Router from './Router';
import NavigationService from './NavigationService';

import styles from '../theme/Styles';


class Bootstrap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
        />
      </View>
    );
  }
}

/* eslint-disable no-unused-vars */
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});
/* eslint-enable no-unused-vars */

export default connect(mapStateToProps, mapDispatchToProps)(Bootstrap);
