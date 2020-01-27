import Colors from '../../styles/Colors';
import { StyleSheet } from 'react-native';

export const StylesPollingPost = StyleSheet.create({
  itemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '70%',
    paddingHorizontal: 5
  },
  percentage: {
    marginLeft: 3,
    backgroundColor: Colors.white,
    height: 6,
    borderRadius: 6,    
  },
  circleIconContainer: {
    marginTop: 5,
    marginLeft: 5,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: Colors.green
  },
  circleIcon: {
    width: 8,
    height: 8,
  }
})

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    minHeight: 300,
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 15,
    marginBottom: 30
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 40
  },
  footerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingVertical: 6,
    borderTopColor: Colors.gray,
    borderTopWidth: 0.5
  },
  footerIconWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerIcon: {
    height: 18,
    width: 18
  },
  footerIconLabel: {
    color: Colors.gray,
    marginLeft: 4
  }
})