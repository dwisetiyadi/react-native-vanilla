/**
 * @author: dwi.setiyadi@gmail.com
*/

import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -80
  },
  innerContainer: {
    marginBottom: 92,
    alignItems: 'center',
  },
  formContainer: {
    width,
    paddingHorizontal: 16,
    marginBottom: 22,
    marginTop: 80,
  },
  emailInput: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    width: '100%'
  },
  buttonLogin: {
    height: 48,
    backgroundColor: '#F2941A',
    borderRadius: 5,
    width: '100%'
  },
  headerWrapper: {

  },
  headerTitle: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
  }
});
