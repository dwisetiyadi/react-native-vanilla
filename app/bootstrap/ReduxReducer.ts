/**
 * @author: dwi.setiyadi@gmail.com
*/

import { combineReducers } from 'redux';
import LoadReducers from '../config/ReduxReducer';

const reduxReducer = combineReducers(LoadReducers);

// const rootReducer = (state, action) => {
//   return reduxReducer(state, action)
// }

export default reduxReducer;
