/**
 * @author: dwi.setiyadi@gmail.com
*/

import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { DetailUsers, ListUsers } from './views';


export default createStackNavigator(
  {
    UserList: { screen: ListUsers },
    UserDetail: { screen: DetailUsers },
  },
  {
    initialScreen: 'UserList',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
  },
);
