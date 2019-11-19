/**
 * @author: dwi.setiyadi@gmail.com
*/

/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import axios from 'axios';
import qs from 'qs';
import { APIURI } from '../config/Api';

export const post = (operation: any, data: any) => (axios as any)({
  method: 'post',
  url: `${APIURI}${operation}`,
  data,
  validateStatus: function validateStatus(status: any) {
    return status = 200;
  },
});

export const get = (operation: any, data: any) => axios.get(`${APIURI}${operation}?${qs.stringify(data)}`);
