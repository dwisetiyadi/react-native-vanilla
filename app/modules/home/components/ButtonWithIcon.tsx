import React from 'react';
import {
  View, 
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ButtonWithIcon = ({styleButton, onPress, iconName, iconSize, iconColor}: any): JSX.Element => {
  return <TouchableOpacity
          style={[Styles.button, styleButton]}
          onPress={onPress}
        >
          <Ionicons
            name={iconName} 
            size={iconSize}
            color={iconColor}
          />
        </TouchableOpacity>
}

const Styles = StyleSheet.create({
  button: {
    height: 45,
    width: 45,
    borderRadius: 45,
    backgroundColor: '#FEFEFE',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ButtonWithIcon;