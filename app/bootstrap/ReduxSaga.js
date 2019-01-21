/**
 * @author: dwi.setiyadi@gmail.com
*/

import { all } from 'redux-saga/effects';
import LoadSagas from '../config/ReduxSaga';

export default function* reduxSaga() {
  yield all(LoadSagas);
}
