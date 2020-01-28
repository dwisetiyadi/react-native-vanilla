import {
  CLASSLISTCLEAR, CLASSLISTFAILED, CLASSLISTFETCH, CLASSLISTSUCCESS, CLASSLISTTOTAL,
} from './ConfigClass';
import { IClassState } from './interfaces/reducers';

const initialState: IClassState = {
  fetchList: true,
  resList: [],
  errList: null,
  dataList: null,
  totalList: 0,
  action: '',
};

export function ReducerClass(state = initialState, action): IClassState {
  switch (action.type) {
    case CLASSLISTFETCH:
      return {
        ...state,
        fetchList: true,
        dataList: action.dataLazyLoad,
        action: action.type,
      };

    case CLASSLISTSUCCESS:
      return {
        ...state,
        fetchList: false,
        resList: [...state.resList, ...action.resList],
        action: action.type,
      };

    case CLASSLISTFAILED:
      return {
        ...state,
        fetchList: false,
        errList: action.errList,
        action: action.type,
      };

    case CLASSLISTCLEAR:
      return {
        ...state,
        resList: initialState.resList,
        totalList: initialState.totalList,
        action: action.type,
      };

    case CLASSLISTTOTAL:
      return {
        ...state,
        totalList: action.totalList,
        action: action.type,
      };

    default:
      return state;
  }
}
