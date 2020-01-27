/**
 * @author: dwi.setiyadi@gmail.com
*/

import { watcherAuth } from '../modules/auth/SagaAuth';
import { watcherUser } from '../modules/users/SagaUsers';
import { watcherBinusAuth } from '../modules/auth_binus/SagaAuth';
import { watcherHome } from '../modules/home/SagaHome';
export default [
  ...watcherAuth,
  ...watcherUser,
  ...watcherBinusAuth,
  ...watcherHome,
];
