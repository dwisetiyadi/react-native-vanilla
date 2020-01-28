/**
 * @author: dwi.setiyadi@gmail.com
*/

/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import axios from 'axios';
import qs from 'qs';
import { APIURI, APISINTONG, APIMO } from '../config/Api';
import { 
  getToken
} from '../config/Helpers';

export const post = (operation: string, data: any): any => axios({
  method: 'post',
  url: `${APIURI}${operation}`,
  data,
  validateStatus: function validateStatus(status) {
    return status = 200;
  },
});

export const get = (operation: string, data: any): any => axios.get(`${APIMO}${operation}?${qs.stringify(data)}`);

export const request = async (operation: string, method: string, data?: any, contentType?: string = 'application/json'): any => {
  const Token = await getToken();  
  return axios({
    method: method,
    url: APISINTONG + operation,
    data,
    headers: {
      'content-type': contentType,
      'Authorization': `Bearer ${Token}` 
    }
  })
  .then(res => res.data)
  .catch(err => {
    console.log("err: ", err)
    return err;
  })
}
