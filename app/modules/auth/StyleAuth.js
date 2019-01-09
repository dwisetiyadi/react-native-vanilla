/**
 * @author: dwi.setiyadi@gmail.com
*/

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    marginBottom: 92,
    alignItems: 'center',
  },
  formContainer: {
    width,
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  emailInput: {
    marginBottom: 32,
  },
});
