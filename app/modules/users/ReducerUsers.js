import {
  USERLISTCLEAR, USERLISTFAILED, USERLISTFETCH, USERLISTSUCCESS, USERLISTTOTAL,
} from './ConfigUsers';

const initialState = {
  fetchList: true,
  resList: [],
  errList: null,
  dataList: null,
  totalList: 0,
};

export function ReducerUsers(state = initialState, action) {
  switch (action.type) {
    case USERLISTFETCH:
      return {
        ...state,
        fetchList: true,
        dataList: action.dataLazyLoad,
        action: action.type,
      };

    case USERLISTSUCCESS:
      return {
        ...state,
        fetchList: false,
        resList: [...state.resList, ...action.resList],
        action: action.type,
      };

    case USERLISTFAILED:
      return {
        ...state,
        fetchList: false,
        errList: action.errList,
        action: action.type,
      };

    case USERLISTCLEAR:
      return {
        ...state,
        resList: initialState.resList,
        totalList: initialState.totalList,
        action: action.type,
      };

    case USERLISTTOTAL:
      return {
        ...state,
        totalList: action.totalList,
        action: action.type,
      };

    default:
      return state;
  }
}
