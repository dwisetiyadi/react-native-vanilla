/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './app/bootstrap/ReduxStore';
import Bootstrap from './app/bootstrap/Bootstrap';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={null}
          persistor={persistor}
        >
          <Bootstrap />
        </PersistGate>
      </Provider>
    );
  }
}
