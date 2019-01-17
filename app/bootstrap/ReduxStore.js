/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import reduxReducer from './ReduxReducer';
import reduxSaga from './ReduxSaga';
import ReduxPersist from '../config/ReduxPersist';

let finalReducers = reduxReducer;
if (ReduxPersist.active) {
  const persistConfig = ReduxPersist.storeConfig;
  finalReducers = persistReducer(persistConfig, reduxReducer);
}
const sagaMiddleware = createSagaMiddleware();

const composeEnhancer = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const middlewares = [sagaMiddleware];

const reduxStore = createStore(
  finalReducers,
  composeEnhancer(applyMiddleware(...middlewares)),
);

sagaMiddleware.run(reduxSaga);

const persistor = persistStore(reduxStore);
const store = reduxStore;

export default {
  persistor,
  store,
};
