/**
 * @author: dwi.setiyadi@gmail.com
*/

import { NavigationActions } from 'react-navigation';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function getRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }

  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getRouteName(route);
  }

  return route.routeName;
}

function navigate(routeName, params) {
  if (params === 'undefined') {
    navigator.dispatch(NavigationActions.navigate(routeName));
  } else {
    navigator.dispatch(NavigationActions.navigate({
      routeName,
      params,
    }));
  }
}

export default {
  setTopLevelNavigator,
  getRouteName,
  navigate,
};
