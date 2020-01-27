

import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';

export interface IHomeState {
  emailInput: string,
  passwordInput: string,
  showLoadingModal: Boolean,
  action?: any,
  err?: any,
  res?: any,
}

export interface IHomeProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  homeFetch: Boolean,
  homeErr: any,
  homeRes: any,
  homeAction: string,
  authRes: any

  classFetch: () => void;
}

export interface IBinusLoadingAuthState {
  showLoadingModal: boolean;
}

export interface IBinusLoadingAuthProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
