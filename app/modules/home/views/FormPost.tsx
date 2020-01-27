import React, { Component } from 'react';
import {
  View, Alert, AsyncStorage, Text, TouchableOpacity
} from 'react-native';

class FormPost extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.TemplteHeader = this.TemplteHeader.bind(this);
  }
  TemplteHeader(): JSX.Elements {
    return (<View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.2,
        borderBottomColor: '#000000',
        padding: 10,
        width: '100%'
      }}
    >
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
      >
      <Text
        style={{
          color: '#000000',
          fontSize: 20
        }}
      >Create a Post</Text>

      </TouchableOpacity>
    </View>)
  }
  render() {
    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {this.TemplteHeader()}
        <Text>FormPost</Text>
      </View>
    )
  }
}

export default FormPost;