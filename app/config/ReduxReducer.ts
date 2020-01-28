/**
 * @author: dwi.setiyadi@gmail.com
*/

import Bootstrap from '../bootstrap/container';
import { ReducerAuth } from '../modules/auth_binus/ReducerAuth';
import { ReducerHome } from '../modules/home/ReducerHome';
import { ReducerClass } from '../modules/courses/ReducerClass';

export default {
  bootstrap: Bootstrap.Reducer,
  auth: ReducerAuth,
  home: ReducerHome,
  class: ReducerClass,
};
