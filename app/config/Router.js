/**
 * @author: dwi.setiyadi@gmail.com
*/

import { LoadingAuth, SignInAuth } from '../modules/auth/views';
import RouterUsers from '../modules/users/RouterUsers';

const screens = {
  AuthLoading: LoadingAuth,
  Auth: SignInAuth,
  App: RouterUsers,
};

const settings = {
  initialRouteName: 'AuthLoading',
  headerMode: 'none',
};

const exitAppWhiteList = [
  'AuthLoading',
  'Auth',
];

export default {
  screens,
  settings,
  exitAppWhiteList,
};
