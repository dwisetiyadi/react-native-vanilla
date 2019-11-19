/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createAppContainer, createStackNavigator } from 'react-navigation';
import RouterConfig from '../config/Router';

const routerSet: any = RouterConfig.settings;

const AppNavigator = createStackNavigator(RouterConfig.modules, routerSet);
export default createAppContainer(AppNavigator);
