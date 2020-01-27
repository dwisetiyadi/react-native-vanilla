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


function* workerSagaBinusSignIn({type, send, callback}: IWorkerSagaBinusSignIn) {
  try {
    const response = yield call(request, '/login', 'POST', send, 'application/json');

    if (response.success) {
      callback(response.data);
      yield put.resolve(authSuccess(response.data));
    } else {
      yield put.resolve(authFailed(response.data.error));
    }
  } catch (error) {
    yield put.resolve(authFailed(error.message));
  }
}

export const watcherBinusAuth = [
  takeLatest(BINUSAUTHFETCH, workerSagaBinusSignIn),
];
