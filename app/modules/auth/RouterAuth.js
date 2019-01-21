/**
 * @author: dwi.setiyadi@gmail.com
*/

import { createStackNavigator } from 'react-navigation';
import { isIos } from '../../config/Platform';
import { SignInAuth } from './views';

export default createStackNavigator(
  {
    SignIn: { screen: SignInAuth },
  },
  {
    initialRouteName: 'SignIn',
    headerMode: isIos ? 'float' : 'screen',
  },
);
