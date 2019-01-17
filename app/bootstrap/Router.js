/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createAppContainer, createStackNavigator } from 'react-navigation';

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

const AppNavigator = createStackNavigator(screens, settings);
const AppContainer = createAppContainer(AppNavigator);

export default {
  screens,
  settings,
  AppContainer,
};
