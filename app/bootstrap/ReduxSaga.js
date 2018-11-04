import { all } from 'redux-saga/effects'
import { watcherAuth } from '../modules/auth/SagaAuth'
import { watcherUser } from '../modules/users/SagaUsers'

export default function* reduxSaga() {
  yield all([
    ...watcherAuth,
    ...watcherUser,
  ])
}
