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

export const userListFetch = (value:any) => ({ type: USERLISTFETCH, dataList: value });
export const userListSuccess = (value:any) => ({ type: USERLISTSUCCESS, resList: value });
export const userListFailed = (value:any) => ({ type: USERLISTFAILED, errList: value });
export const userListClear = () => ({ type: USERLISTCLEAR });
export const userListTotal = (value:any) => ({ type: USERLISTTOTAL, totalList: value });
