/**
 * @author: dwi.setiyadi@gmail.com
*/

import Bootstrap from '../bootstrap/container';
import { ReducerAuth } from '../modules/auth/ReducerAuth';
import { ReducerUsers } from '../modules/users/ReducerUsers';

export default {
  bootstrap: Bootstrap.Reducer,
  auth: ReducerAuth,
  user: ReducerUsers,
};
