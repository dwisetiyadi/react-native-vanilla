/**
 * @author: dwi.setiyadi@gmail.com
*/

import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.loadingModal.background,
  },
  loading: {
    width: 120,
    height: 120,
  },
});
