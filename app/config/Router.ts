/**
 * @author: dwi.setiyadi@gmail.com
*/
import RouterBinusAuth from '../modules/auth_binus/RouterAuth';
import RouterHome from '../modules/home/RouterHome';
import RouterClass from '../modules/courses/RouterClass';

const auth = {
  ...RouterBinusAuth,
};

const mainModules = {
  ...RouterHome,
  ...RouterClass,
}


const settings = {
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
  'BinusSignIn',
];

export default {
  auth,
  settings,
  exitAppWhiteListScreen,
  mainModules,
  mainModulesSettings
};
