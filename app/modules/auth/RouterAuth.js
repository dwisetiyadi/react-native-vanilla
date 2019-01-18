/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createStackNavigator } from 'react-navigation';

import { SignInAuth } from './views';

export default createStackNavigator(
  {
    SignIn: { screen: SignInAuth },
  },
  {
    initialRouteName: 'SignIn',
    mode: 'modal',
  },
);
