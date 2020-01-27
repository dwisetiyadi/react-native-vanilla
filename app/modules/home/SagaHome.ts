/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { post, request } from '../../utilities/StoreApi';
import {
  CLASSFETCH,
  CLASSSUCCESS,
  CLASSFAILURE
} from './ConfigHome';
import {
  classSuccess,
  classFailed,
} from './ActionHome';
// import  { IWorkerSagaBinusSignIn } from './interfaces/sagas';


function* workerSagaClassFetch() {
  console.log("workerSagaClassFetch");
  try {
    const response = yield call(request, '/classes', 'GET');
    if (response.success) {
      yield put.resolve(classSuccess(response));
    } else {
      yield put.resolve(classFailed(response));
    }
  } catch (error) {
    yield put.resolve(classFailed(error.message));
  }
}

export const watcherHome = [
  takeLatest(CLASSFETCH, workerSagaClassFetch),
];
