import React from 'react';
import Courses from './views/index';
import GraduationHat from '../../assets/images/graduation-hat.tsx';

export default {
  Courses: { 
    screen: Courses.Main,
    navigationOptions: ({ navigation }) => {
      const isActive =  navigation.isFocused();
      return {
        tabBarIcon: ({ focused, horizontal, tintColor}) => {
          if(isActive) {
            return <GraduationHat
                      height={25}
                      width={25}
                      color={'#018dd5'}
                    />
          }
          return <GraduationHat
                    height={25}
                    width={25}
                  />
          }
      }
    }
  }
};
