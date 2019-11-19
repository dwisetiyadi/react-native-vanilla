/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  AUTHFETCH,
  AUTHSUCCESS,
  AUTHFAILED,
} from './ConfigAuth';

export const authFetch = (value: any) => ({ type: AUTHFETCH, send: value });
export const authSuccess = (value: any) => ({ type: AUTHSUCCESS, res: value });
export const authFailed = (value: any) => ({ type: AUTHFAILED, err: value });
