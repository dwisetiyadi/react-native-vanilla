/**
 * @author: dwi.setiyadi@gmail.com
*/

import { SETSCREEN } from '../../config/Constants';

const initialState = {
  action: null,
  previous: null,
  current: null,
};

export function ReducerContainer(state = initialState, action) {
  switch (action.type) {
    case SETSCREEN:
      return {
        ...state,
        action: action.screen.action,
        previous: action.screen.previous,
        current: action.screen.current,
      };

    default:
      return state;
  }
}
