import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    height: 90,
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  buttonWrapper: {
    height: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  dot: {
    backgroundColor: 'red',
    height: 13,
    width: 13,
    borderRadius: 13,
    position: 'absolute',
    right: 3,
    top: 3
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageIcon: {
    height: 25,
    width: 25
  },
  label: {
    color: '#000000',
    fontSize: 13
  }
}) 