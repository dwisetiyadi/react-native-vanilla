/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

import axios from 'axios'
import qs from 'qs'
import { APIURI } from '../config/Api'

export const post = (operation, data) => axios({
  method: 'post',
  url: `${APIURI}${operation}`,
  data,
  validateStatus: function validateStatus(status) {
    return status = 200
  },
})

export const get = (operation, data) => axios.get(`${APIURI}${operation}?${qs.stringify(data)}`)
