import { combineReducers } from 'redux'
import { ReducerAuth } from '../modules/auth/ReducerAuth'
import { ReducerUsers } from '../modules/users/ReducerUsers'

const reduxReducer = combineReducers({
  auth: ReducerAuth,
  user: ReducerUsers,
})

// const rootReducer = (state, action) => {
//   return reduxReducer(state, action)
// }

export default reduxReducer
