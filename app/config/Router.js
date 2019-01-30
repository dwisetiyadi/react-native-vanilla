/**
 * @author: dwi.setiyadi@gmail.com
*/

import { LoadingAuth, SignInAuth } from '../modules/auth/views';
import RouterUsers from '../modules/users/RouterUsers';

const modules = {
  AuthLoading: LoadingAuth,
  Auth: SignInAuth,
  App: RouterUsers,
};

const settings = {
  initialRouteName: 'AuthLoading',
  headerMode: 'none',
};

const exitAppWhiteListScreen = [
  'AuthLoading',
  'Auth',
];

export default {
  modules,
  settings,
  exitAppWhiteListScreen,
};
