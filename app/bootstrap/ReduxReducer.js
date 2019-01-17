/**
 * @author: dwi.setiyadi@gmail.com
*/

import { combineReducers } from 'redux';
import Container from './container';
import { ReducerAuth } from '../modules/auth/ReducerAuth';
import { ReducerUsers } from '../modules/users/ReducerUsers';

const reduxReducer = combineReducers({
  screen: Container.Reducer,
  auth: ReducerAuth,
  user: ReducerUsers,
});

// const rootReducer = (state, action) => {
//   return reduxReducer(state, action)
// }

export default reduxReducer;
