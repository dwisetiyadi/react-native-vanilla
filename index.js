/**
 * @author: dwi.setiyadi@gmail.com
*/

import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';

YellowBox.ignoreWarnings([
  'Require cycle:',
  'unknown call: "relay:check"',
]);

// if (Text.defaultProps == null) Text.defaultProps = {};
// Text.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
