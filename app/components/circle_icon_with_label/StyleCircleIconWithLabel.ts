import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 35, 
    minWidth: 35,
    backgroundColor: '#DEDEDE',
    borderRadius: 35,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconWrapper: {
    height: 35,
    width: 35,
    borderRadius: 35,
    backgroundColor: '#75B542',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#3C3C3C',
    fontWeight: 'bold',
    marginHorizontal: 7,
  },
  icon: {
    height: 18,
    width: 18
  }
})