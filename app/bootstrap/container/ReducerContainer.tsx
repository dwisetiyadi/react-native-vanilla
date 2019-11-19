/**
 * @author: dwi.setiyadi@gmail.com
*/

import { SETSCREEN } from '../../config/Constants';

const initialState = {
  action: null,
  prevScreen: null,
  thisScreen: null,
};

export function ReducerContainer(state = initialState, action: any) {
  switch (action.type) {
    case SETSCREEN:
      return {
        ...state,
        action: action.screen.action,
        prevScreen: action.screen.prevScreen,
        thisScreen: action.screen.thisScreen,
      };

    default:
      return state;
  }
}
