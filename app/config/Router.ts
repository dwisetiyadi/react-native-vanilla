/**
 * @author: dwi.setiyadi@gmail.com
*/

import RouterAuth from '../modules/auth/RouterAuth';
import RouterUsers from '../modules/users/RouterUsers';
import RouterBinusAuth from '../modules/auth_binus/RouterAuth';
import RouterHome from '../modules/home/RouterHome';
import RouterCourses from '../modules/courses/RouterCourses';

const modules = {
  ...RouterBinusAuth,
  // ...RouterAuth,
  // ...RouterUsers,
};

const mainModules = {
  ...RouterHome,
  ...RouterCourses,
}


const settings = {
  // initialRouteName: 'AuthLoading',
  initialRouteName: 'BinusSignIn',
  headerMode: 'none',
};

const mainModulesSettings  = {
  initialRouteName: 'Home',
  tabBarOptions: {
    showLabel: false
  }
}

const exitAppWhiteListScreen = [
  // 'AuthLoading',
  'BinusSignIn',
  'Auth',
];

export default {
  modules,
  settings,
  exitAppWhiteListScreen,
  mainModules,
  mainModulesSettings
};
