export interface ISearchButton {
  onPress?: () => void; 
  label?: string; 
  containerStyle?: any; 
  labelStyle?: any; 
  props?: any;
}

export interface ISearchIcon {
  onPress?: () => void;
}

export interface IBackIcon {
  onPress?: () => void;
  active?: boolean; 
  props?: any;
}

export interface IForwardIcon {
  onPress?: () => void;
  active?: boolean; 
  props?: any;
}

export interface ICloseIcon {
  onPress?: () => void;
}

export interface IHeadlineListItem {
  item?: any;
  onPress?: () => void;
}

export interface ISession {
  session?: string;
}

export interface IClassId {
  id?: string;
}

export interface IClassName {
  class?: string;
}

export interface ILecturer {
  lecturer?: string;
  photo?: string,
}

export interface IAvatar {
  avatar?: string;
}

export interface IIcon {
  icon?: string;
}

export interface IProgressBar {
  progress?: string;
}
