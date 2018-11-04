import { createStackNavigator } from 'react-navigation'

import signIn from './views/SignInAuth'

export default createStackNavigator(
  {
    SignIn: { screen: signIn },
  },
  {
    initialRouteName: 'SignIn',
    mode: 'modal',
  },
)
