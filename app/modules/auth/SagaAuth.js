import {
  call, put, takeLatest,
} from 'redux-saga/effects'
import { post } from '../../utilities/StoreApi'
import {
  AUTHFETCH, APISIGNIN,
} from './ConfigAuth'
import {
  authSuccess,
  authFailed,
} from './ActionAuth'

function* workerSagaSignIn(params) {
  try {
    const response = yield call(post, APISIGNIN, params.send)

    if (response.status === 200 && response.data.token !== 'undefined') {
      yield put.resolve(authSuccess(response.data.token))
    } else {
      yield put.resolve(authFailed(response.data.error))
    }
  } catch (error) {
    yield put.resolve(authFailed(error.message))
  }
}

export const watcherAuth = [
  takeLatest(AUTHFETCH, workerSagaSignIn),
]
