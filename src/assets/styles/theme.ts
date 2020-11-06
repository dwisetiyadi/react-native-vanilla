import {configureFonts, DefaultTheme} from 'react-native-paper';

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Ubuntu',
    },
    medium: {
      fontFamily: 'Ubuntu',
    },
    light: {
      fontFamily: 'Ubuntu',
    },
    thin: {
      fontFamily: 'Ubuntu',
    },
  },
};

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ba0d0d',
    accent: '#de1b1b',
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
