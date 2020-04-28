/**
 * @author: dwi.setiyadi@gmail.com
*/

import {
  CLASSFETCH,
  CLASSSUCCESS,
  CLASSFAILURE,
  UPCOMINGCLASSFETCH,
  UPCOMINGCLASSSUCCESS,
  UPCOMINGCLASSFAILURE
} from './ConfigHome';

export const classFetch = () => { console.log("masuk action"); return { type: CLASSFETCH } };
export const classSuccess = value => ({ type: CLASSSUCCESS, res: value });
export const classFailed = value => ({ type: CLASSFAILURE, err: value });


