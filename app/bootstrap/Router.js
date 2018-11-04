import { createSwitchNavigator } from 'react-navigation'
import AuthLoadingScreen from '../modules/auth/views/LoadingAuth'
import AuthRouter from '../modules/auth/RouterAuth'
import RouterUsers from '../modules/users/RouterUsers'

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthRouter,
    App: RouterUsers,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)
