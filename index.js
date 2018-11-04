/**
 * @author Dwi Setiyadi
 */

import { AppRegistry, Text, YellowBox } from 'react-native'
import App from './App'
import { name as appName } from './app.json'

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Remote debugger is in a background tab',
  'Class RCTCxxModule was not exported. Did you forget to use RCT_EXPORT_MODULE()?',
  'Warning: react-swipeable-view:',
  'Setting a timer',
  'Deprecation warning: value provided is not in a recognized RFC2822 or ISO format.',
  'Possible Unhandled Promise Rejection',
])

if (Text.defaultProps == null) Text.defaultProps = {}
Text.defaultProps.allowFontScaling = false

AppRegistry.registerComponent(appName, () => App)
