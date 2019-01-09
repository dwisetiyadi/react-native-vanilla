/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createStackNavigator } from 'react-navigation';

import { DetailUsers, ListUsers } from './views';


export default createStackNavigator(
  {
    UserList: { screen: ListUsers },
    UserDetail: { screen: DetailUsers },
  },
  {
    mode: 'screen',
    initialScreen: 'UserList',
  },
);
