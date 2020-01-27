import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray,
    position: 'relative',
  },
  icon: {
    height: 25,
    width: 25
  },
  notif: {
    backgroundColor: 'red',
    height: 10,
    width: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 1,
    top: 1
  }
})