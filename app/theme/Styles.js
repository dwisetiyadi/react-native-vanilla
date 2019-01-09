import { StyleSheet } from 'react-native';

export const Colors = {
  purple: '#603fb0',
  lightPurple: '#4b32a2',
  white: '#FFFFFF',
  gray: '#777777',
  semiGray: '#E2E2E2',
  semiBlack: '#212121',
  black: '#000000',
  blue: '#3E83FF',
  maroon: '#B73F3A',
  loadingModal: {
    background: 'rgba(0,0,0,0.5)',
    headerEffect: 'rgba(0,0,0,0.6)',
  },
};

export const ButtonStyles = StyleSheet.create({
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

export default StyleSheet.create({
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
