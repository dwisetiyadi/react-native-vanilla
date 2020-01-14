/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  AUTHFETCH,
  AUTHSUCCESS,
  AUTHFAILED,
} from './ConfigAuth';
import { IReducerAuthState } from './interfaces/reducers';

const initialState: IReducerAuthState = {
  fetch: false,
  send: null,
  res: null,
  err: null,
  action: ''
};

export function ReducerAuth(state = initialState, action): IReducerAuthState {
  switch (action.type) {
    case AUTHFETCH:
      return {
        ...state,
        fetch: true,
        send: action.send,
        action: action.type,
      };

    case AUTHSUCCESS:
      return {
        ...state,
        fetch: false,
        res: action.res,
        action: action.type,
      };

    case AUTHFAILED:
      return {
        ...state,
        fetch: false,
        err: action.err,
        action: action.type,
      };

    default:
      return state;
  }
}
