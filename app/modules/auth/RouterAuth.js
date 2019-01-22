/**
 * @author: dwi.setiyadi@gmail.com
*/

import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { SignInAuth } from './views';

export default createStackNavigator(
  {
    SignIn: { screen: SignInAuth },
  },
  {
    initialRouteName: 'SignIn',
    headerMode: Platform.OS === 'ios' ? 'float' : 'screen',
  },
);
