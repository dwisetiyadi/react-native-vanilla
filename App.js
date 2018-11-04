/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store } from './app/bootstrap/ReduxStore'
import Router from './app/bootstrap/Router'

import Styles from './app/theme/Styles'

export default class App extends Component {
  render() {
    return (
      <Provider store={store} style={Styles.container}>
        <Router />
      </Provider>
    );
  }
}
