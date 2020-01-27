import React, { Component } from 'react';
import {
  View, Alert, AsyncStorage, Text, TouchableOpacity,
} from 'react-native';
import Styles from '../StyleCourses';

class Courses extends Component<any, any> {
  render() {
    return (
      <View style={Styles.container}>
        <Text>Courses</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('FormPost')} 
        >
          <Text>
            POST
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Courses;