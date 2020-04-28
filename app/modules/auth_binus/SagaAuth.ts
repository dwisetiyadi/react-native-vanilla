/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { post, request } from '../../utilities/StoreApi';
import {
  BINUSAUTHFETCH, 
} from './ConfigAuth';
import {
  authSuccess,
  authFailed,
} from './ActionAuth';
import  { IWorkerSagaBinusSignIn } from './interfaces/sagas';
import { FakeLogin } from './HelpersAuth';
import { APISINTONG } from '../../config/Api';


function* workerSagaBinusSignIn({type, send, callback}: IWorkerSagaBinusSignIn) {
  try {
    const response = yield call(request, `${APISINTONG}/login`, 'POST', send, 'application/json');

    if (response.success) {
      callback(response.data);
      yield put.resolve(authSuccess(response.data));
    } else {
      callback(false);
      yield put.resolve(authFailed(response.data.error));
    }
  } catch (error) {
    callback(false);
    yield put.resolve(authFailed(error.message));
  }
}

export const watcherBinusAuth = [
  takeLatest(BINUSAUTHFETCH, workerSagaBinusSignIn),
];
