/**
 * @author: dwi.setiyadi@gmail.com
*/

import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  buttonContainer: {
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
    height: 36,
    elevation: 2,
  },
  normal: {
    backgroundColor: Colors.purple,
  },
  danger: {
    backgroundColor: Colors.maroon,
  },
  text: {
    fontSize: 14,
    color: Colors.white,
  },
});
