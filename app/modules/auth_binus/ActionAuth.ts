/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  BINUSAUTHFETCH,
  BINUSAUTHSUCCESS,
  BINUSAUTHFAILED,
} from './ConfigAuth';

export const authFetch = (value: any, callback?: Function) => ({ type: BINUSAUTHFETCH, send: value, callback });
export const authSuccess = value => ({ type: BINUSAUTHSUCCESS, res: value });
export const authFailed = value => ({ type: BINUSAUTHFAILED, err: value });
