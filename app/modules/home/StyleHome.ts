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
    marginTop: -80,
    padding: 16
  },
  headerWrapper: {
    width: '100%'
  },
  headerIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  UserImage: {
    height: 45,
    width: 45,
    borderRadius: 45
  },
  headerButtonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTextWrapper: {
    marginBottom: 25,
    marginTop:10
  },
  headerTextGreeting: {
    color: '#fff',
    fontSize: 16
  },
  headerTextName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 13,
  },
  onGoingClassBackground: {
    marginTop: 15
  },
  navIcon: {
    height: 22,
    width: 22
  }
});
