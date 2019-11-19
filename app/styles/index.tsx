/**
 * @author: dwi.setiyadi@gmail.com
*/

import { StyleSheet } from 'react-native';
import Colors_ from './Colors';

const Colors = Colors_;

const Main = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColor: Colors.white,
  },
  appHeader: {
    backgroundColor: Colors.purple,
  },
  appHeaderTitle: {
    fontWeight: 'bold',
  },
});

export default {
  Colors,
  Main,
};
