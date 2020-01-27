

import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';

export interface IBinusSignInAuthState {
  emailInput: string,
  passwordInput: string,
  showLoadingModal: Boolean,
  action?: any,
  err?: any,
  res?: any,
}

export interface IBinusSignInAuthProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  action?: any;
  err?: any;
  res?: any;
  onRequest: (
    { email, password } :
    { email: string, password: string }
    ) => void;
}

export interface IBinusLoadingAuthState {
  showLoadingModal: boolean;
}

export interface IBinusLoadingAuthProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
