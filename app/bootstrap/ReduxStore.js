import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reduxReducer from './ReduxReducer'
import reduxSaga from './ReduxSaga'

const finalReducers = reduxReducer
const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

const middlewares = [sagaMiddleware]

const reduxStore = createStore(
  finalReducers,
  composeEnhancer(applyMiddleware(...middlewares)),
)

sagaMiddleware.run(reduxSaga)

export const store = reduxStore
