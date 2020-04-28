import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';

export interface IDetailClassProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  onClearList: () => void;
}

export interface IDetailClassState {
  nameInput: string,
  jobInput: string,
  showLoadingModal: boolean,
  operationType? : any,
}

export interface IListClassState {
  refreshing: boolean | null;
  page: number;
  isToday: boolean | null;
}

export interface IListClassProps {
  fetch: any
  res: any,
  err: any,
  total: number,
  action: any,
  onRequestList: (value: Object) =>  void,
  onClearList: () =>  void,
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface IListClassListItemProps {
  id: string;
  isToday: boolean;
  session: string;
  campusroom: string;
  time: string;
  classname: string;
  lecturername: string;
  progressvalue: string;
  //onPress: () => void;
}

export interface IListClassItemProps {
  id: string;
  isToday: boolean;
  session: string;
  campusroom: string;
  time: string;
  classname: string;
  lecturername: string;
  progressvalue: string;
}