/**
 * @author: dwi.setiyadi@gmail.com
*/
import { watcherBinusAuth } from '../modules/auth_binus/SagaAuth';
import { watcherHome } from '../modules/home/SagaHome';
export default [
  ...watcherBinusAuth,
  ...watcherHome,
];
