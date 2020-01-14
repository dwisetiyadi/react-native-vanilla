

import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';

export interface ISignInAuthState {
  emailInput: string,
  passwordInput: string,
  showLoadingModal: Boolean,
  action?: any,
  err?: any,
  res?: any,
}

export interface ISignInAuthProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  action?: any;
  err?: any;
  res?: any;
  onRequest: (
    { email, password } :
    { email: string, password: string }
    ) => void;
}

export interface ILoadingAuthState {
  showLoadingModal: boolean;
}

export interface ILoadingAuthProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
