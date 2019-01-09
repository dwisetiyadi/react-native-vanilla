/**
 * @author: dwi.setiyadi@gmail.com
*/

import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(NavigationActions.navigate({
    routeName,
    params,
  }));
}

function fabNavigate(navigateAction) {
  navigator.dispatch(NavigationActions.navigate(navigateAction));
}

export default {
  navigate,
  setTopLevelNavigator,
  fabNavigate,
};
