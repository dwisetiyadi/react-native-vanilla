/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  AUTHFETCH,
  AUTHSUCCESS,
  AUTHFAILED,
} from './ConfigAuth';

export const authFetch = value => ({ type: AUTHFETCH, send: value });
export const authSuccess = value => ({ type: AUTHSUCCESS, res: value });
export const authFailed = value => ({ type: AUTHFAILED, err: value });
