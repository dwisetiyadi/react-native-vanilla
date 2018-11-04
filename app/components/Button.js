import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { ButtonStyles } from '../theme/Styles'

export const NormalButton = ({
  onPress,
  text,
  containerStyle,
  textStyle,
}) => (
  <TouchableOpacity onPress={onPress} style={[ButtonStyles.buttonContainer, ButtonStyles.normal, containerStyle]}>
    <Text style={[ButtonStyles.text, textStyle]}>
      {text.toUpperCase()}
    </Text>
  </TouchableOpacity>
)

export const DangerButton = ({
  onPress,
  text,
  containerStyle,
  textStyle,
}) => (
  <TouchableOpacity onPress={onPress} style={[ButtonStyles.buttonContainer, ButtonStyles.danger, containerStyle]}>
    <Text style={[ButtonStyles.text, textStyle]}>
      {text.toUpperCase()}
    </Text>
  </TouchableOpacity>
)
