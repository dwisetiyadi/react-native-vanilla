/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createAppContainer, createStackNavigator } from 'react-navigation';
import RouterConfig from '../config/Router';

const AppNavigator = createStackNavigator(RouterConfig.modules, RouterConfig.settings);
export default createAppContainer(AppNavigator);
