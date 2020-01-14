/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { post } from '../../utilities/StoreApi';
import {
  AUTHFETCH, APISIGNIN,
} from './ConfigAuth';
import {
  authSuccess,
  authFailed,
} from './ActionAuth';
import  { IWorkerSagaSignIn } from './interfaces/sagas';

function* workerSagaSignIn(params: IWorkerSagaSignIn) {
  try {
    const response = yield call(post, APISIGNIN, params.send);

    if (response.status === 200 && response.data.token !== 'undefined') {
      yield put.resolve(authSuccess(response.data.token));
    } else {
      yield put.resolve(authFailed(response.data.error));
    }
  } catch (error) {
    yield put.resolve(authFailed(error.message));
  }
}

export const watcherAuth = [
  takeLatest(AUTHFETCH, workerSagaSignIn),
];
