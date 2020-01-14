/**
 * @author: dwi.setiyadi@gmail.com
*/

import Container_ from './container';
import ReduxStore_ from './ReduxStore';
import NavigationService from './NavigationService';

const Container = Container_;
const ReduxStore = ReduxStore_.store;
const ReduxPersist = ReduxStore_.persistor;
const Navigate = NavigationService.navigate;

export default {
  Container,
  ReduxStore,
  ReduxPersist,
  Navigate,
};
