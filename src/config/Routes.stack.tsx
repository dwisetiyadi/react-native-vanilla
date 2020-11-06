import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '@app/Header.app';

import HomeScreenHome from '@modules/home/screens/Home.screen';

const Stack = createStackNavigator();

const RoutesStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        header: ({scene, previous, navigation}) => (
          <Header scene={scene} previous={previous} navigation={navigation} />
        ),
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreenHome}
        options={{headerTitle: 'Home', headerShown: false}}
      />
      {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
    </Stack.Navigator>
  );
};

export default RoutesStack;
