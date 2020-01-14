/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import { get } from '../../utilities/StoreApi';
import {
  APIUSER, USERLISTFETCH,
} from './ConfigUsers';
import {
  userListFailed,
  userListSuccess,
  userListTotal,
} from './ActionUsers';
import { IworkerSagaUserListParams } from './interfaces/sagas';

function* workerSagaUserList(params: IworkerSagaUserListParams): void {
  try {
    const response = yield call(get, APIUSER, params.dataList);

    if (response.status === 200 && response.data.data.length > 0) {
      yield put(userListTotal(response.data.total));
      yield put.resolve(userListSuccess(response.data.data));
    }
  } catch (error) {
    yield put.resolve(userListFailed(error.message));
  }
}

export const watcherUser = [
  takeLatest(USERLISTFETCH, workerSagaUserList),
];
