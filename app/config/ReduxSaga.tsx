/**
 * @author: dwi.setiyadi@gmail.com
*/

import { watcherAuth } from '../modules/auth/SagaAuth';
import { watcherUser } from '../modules/users/SagaUsers';

export default [
  ...watcherAuth,
  ...watcherUser,
];
