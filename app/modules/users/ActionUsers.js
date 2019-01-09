/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  USERLISTCLEAR,
  USERLISTFAILED,
  USERLISTFETCH,
  USERLISTSUCCESS,
  USERLISTTOTAL,
} from './ConfigUsers';

export const userListFetch = value => ({ type: USERLISTFETCH, dataList: value });
export const userListSuccess = value => ({ type: USERLISTSUCCESS, resList: value });
export const userListFailed = value => ({ type: USERLISTFAILED, errList: value });
export const userListClear = () => ({ type: USERLISTCLEAR });
export const userListTotal = value => ({ type: USERLISTTOTAL, totalList: value });
