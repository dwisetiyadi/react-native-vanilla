import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';

import theme from '@assets/styles/theme';
import Stack from '@config/Routes.stack';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
