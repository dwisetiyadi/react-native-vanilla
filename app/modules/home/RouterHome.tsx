/**
 * @author: dwi.setiyadi@gmail.com
*/import React from 'react';
import {
  View,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Home from './views/index';
import HomeIconInActive from './../../assets/images/home-gray.png';
import HomeIconActive from './../../assets/images/home-blue.png';
import Styles from '../../styles/index';

export default {
  Home: { 
    screen: Home.Main,
    navigationOptions: ({ navigation }) => {
      const isActive =  navigation.isFocused();
      let HomeIcon = HomeIconInActive;
      if(isActive) {
        HomeIcon = HomeIconActive;
      }
      return {
        tabBarIcon: ({ focused, horizontal, tintColor}) => (
          <Image
            source={HomeIcon}
            style={Styles.Main.navBottomIcon}
          />
        )
      }
    }
  },
  FormPost: {
    screen: Home.FormPost,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarVisible: false,
      }
    }
  }
};
