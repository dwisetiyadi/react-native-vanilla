/**
 * @author: dwi.setiyadi@gmail.com
*/

import Bootstrap from '../bootstrap/container';
// import { ReducerAuth } from '../modules/auth/ReducerAuth';
import { ReducerAuth } from '../modules/auth_binus/ReducerAuth';
import { ReducerUsers } from '../modules/users/ReducerUsers';
import { ReducerHome } from '../modules/home/ReducerHome';

export default {
  bootstrap: Bootstrap.Reducer,
  auth: ReducerAuth,
  user: ReducerUsers,
  home: ReducerHome,
};
