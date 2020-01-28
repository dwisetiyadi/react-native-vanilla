/**
 * @author: dwi.setiyadi@gmail.com
*/
import { watcherBinusAuth } from '../modules/auth_binus/SagaAuth';
import { watcherHome } from '../modules/home/SagaHome';
import { watcherClass } from '../modules/courses/SagaClass';
export default [
  ...watcherBinusAuth,
  ...watcherHome,
  ...watcherClass,
];
