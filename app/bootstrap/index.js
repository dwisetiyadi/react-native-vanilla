/**
 * @author: dwi.setiyadi@gmail.com
*/

import Container from './container';
import ReduxStore_ from './ReduxStore';
import NavigationService from './NavigationService';

const ViewContainer = Container.View;
const ReduxStore = ReduxStore_.store;
const ReduxPersist = ReduxStore_.persistor;
const Navigate = NavigationService.navigate;

export default {
  ViewContainer,
  ReduxStore,
  ReduxPersist,
  Navigate,
};
