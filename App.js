/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Bootstrap from './app/bootstrap';

export default class App extends Component {
  render() {
    return (
      <Provider store={Bootstrap.ReduxStore}>
        <PersistGate
          loading={null}
          persistor={Bootstrap.ReduxPersist}
        >
          <Bootstrap.ViewContainer />
        </PersistGate>
      </Provider>
    );
  }
}
