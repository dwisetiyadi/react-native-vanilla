
import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';

export interface IDetailUsersProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  onClearList: () => void;
}

export interface IDetailUsersState {
  nameInput: string,
  jobInput: string,
  showLoadingModal: boolean,
  operationType? : any,
}


export interface IListUsersState {
  refreshing: boolean | null;
  page: number;
}

export interface IListUsersProps {
  fetch: any
  res: any,
  err: any,
  total: number,
  action: any,
  onRequestList: (value: Object) =>  void,
  onClearList: () =>  void,
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export interface IListUsersListItemProps {
  avatar: string;
  title: string;
  onPress: () => void;
}