/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createStackNavigator } from 'react-navigation';
import { isIos } from '../../config/Platform';
import { DetailUsers, ListUsers } from './views';


export default createStackNavigator(
  {
    UserList: { screen: ListUsers },
    UserDetail: { screen: DetailUsers },
  },
  {
    initialScreen: 'UserList',
    headerMode: isIos ? 'float' : 'screen',
  },
);
