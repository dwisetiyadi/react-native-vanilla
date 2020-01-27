/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  BINUSAUTHFETCH,
  BINUSAUTHSUCCESS,
  BINUSAUTHFAILED,
} from './ConfigAuth';
import { IReducerBinusAuthState } from './interfaces/reducers';

const initialState: IReducerBinusAuthState = {
  fetch: false,
  send: null,
  res: null,
  err: null,
  action: ''
};

export function ReducerAuth(state = initialState, action): IReducerBinusAuthState {
  switch (action.type) {
    case BINUSAUTHFETCH:
      return {
        ...state,
        fetch: true,
        send: action.send,
        action: action.type,
      };

    case BINUSAUTHSUCCESS:
      return {
        ...state,
        fetch: false,
        res: action.res,
        action: action.type,
      };

    case BINUSAUTHFAILED:
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
