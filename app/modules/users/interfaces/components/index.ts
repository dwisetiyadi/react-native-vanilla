
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