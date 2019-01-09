/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createAppContainer, createStackNavigator } from 'react-navigation';

import AuthLoadingScreen from '../modules/auth/views/LoadingAuth';
import AuthRouter from '../modules/auth/RouterAuth';
import RouterUsers from '../modules/users/RouterUsers';

const AppNavigator = createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthRouter,
    App: RouterUsers,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
