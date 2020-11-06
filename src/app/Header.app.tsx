import * as React from 'react';
import {Appbar} from 'react-native-paper';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HeaderApp = ({scene, previous, navigation}: any) => {
  const {options} = scene.descriptor;

  const goback = options.goback !== undefined ? options.goback : 'Home';
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
  const subtitle = options.subtitle !== undefined ? options.subtitle : '';

  return (
    <Appbar.Header>
      {goback !== 'Home' && (
        <Appbar.BackAction onPress={() => navigation.navigate(goback)} />
      )}
      <Appbar.Content title={title} subtitle={subtitle} />
      <Appbar.Action icon="magnify" onPress={() => console.log('Searching')} />
      {/* <Appbar.Action icon="dots-vertical" onPress={() => console.log('dot menu')} /> */}
    </Appbar.Header>
  );
};

export default HeaderApp;
