import { Dimensions } from 'react-native'

export const NavigationOptions = {
  headerStyle: {
    backgroundColor: '#603fb0',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const { width, height } = Dimensions.get('window')
export const dimensions = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}
