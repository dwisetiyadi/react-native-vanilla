/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import RouterConfig from '../config/Router';

const App = createBottomTabNavigator(RouterConfig.mainModules, RouterConfig.mainModulesSettings);
const Auth = createStackNavigator(RouterConfig.modules, RouterConfig.settings);
export default createAppContainer(
  createSwitchNavigator(
   {
     Auth: Auth,
     App: App
  }
  )
);
