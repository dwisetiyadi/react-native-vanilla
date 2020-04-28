import {
  CLASSLISTCLEAR,
  CLASSLISTFAILED,
  CLASSLISTFETCH,
  CLASSLISTSUCCESS,
  CLASSLISTTOTAL,
} from './ConfigClass';

export const classListFetch = (value: any) => ({ type: CLASSLISTFETCH, dataList: value });
export const classListSuccess = (value: any) => ({ type: CLASSLISTSUCCESS, resList: value });
export const classListFailed = (value: any) => ({ type: CLASSLISTFAILED, errList: value });
export const classListClear = () => ({ type: CLASSLISTCLEAR });
export const classListTotal = (value: any) => ({ type: CLASSLISTTOTAL, totalList: value });
