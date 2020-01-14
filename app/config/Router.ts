/**
 * @author: dwi.setiyadi@gmail.com
*/

import RouterAuth from '../modules/auth/RouterAuth';
import RouterUsers from '../modules/users/RouterUsers';

const modules = {
  ...RouterAuth,
  ...RouterUsers,
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
