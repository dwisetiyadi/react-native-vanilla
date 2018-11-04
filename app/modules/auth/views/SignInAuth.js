import React, { Component } from 'react'
import { View, Alert, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
import MyStatusBar from '../../../components/MyStatusBar'
import { NormalButton } from '../../../components/Button'
import { NavigationOptions } from '../../../config/Platform'
import MyInput from '../../../components/MyInput'
import LoadingModal from '../../../components/LoadingModal'
import StyleAuth from '../StyleAuth'
import { authFetch } from '../ActionAuth'
import {
  AUTHSUCCESS, AUTHFAILED, LOGGEDIN,
} from '../ConfigAuth'

const initialState = {
  emailInput: '',
  passwordInput: '',
  showLoadingModal: false,
}

class SignInAuth extends Component {
  static navigationOptions = {
    title: 'Log in',
    ...NavigationOptions,
  }

  constructor(props) {
    super(props)

    this.state = initialState

    this.handleNavigation = this.handleNavigation.bind(this)
  }

  async componentWillReceiveProps(props) {
    if (props.action === AUTHFAILED) {
      this.setState({ showLoadingModal: false })
      Alert.alert(props.err)
    }

    if (props.action === AUTHSUCCESS) {
      await AsyncStorage.setItem('condition', LOGGEDIN)
      await AsyncStorage.setItem('token', props.res)
      this.setState({ showLoadingModal: false })
      this.props.navigation.navigate('App')
    }
  }

  handleNavigation() {
    this.setState({ showLoadingModal: true })
    const data = {
      email: this.state.emailInput,
      password: this.state.passwordInput,
    }
    this.props.onRequest(data)
  }

  renderForm() {
    return (
      <View
        style={StyleAuth.formContainer}
      >
        <MyInput
          onChangeText={text => this.setState({ emailInput: text })}
          value={this.state.emailInput}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          style={StyleAuth.emailInput}
        />
        <MyInput
          onChangeText={text => this.setState({ passwordInput: text })}
          value={this.state.passwordInput}
          placeholder="Password"
          secureTextEntry
        />
      </View>
    )
  }

  render() {
    return (
      <View style={StyleAuth.container}>
        <MyStatusBar />
        <View style={StyleAuth.innerContainer}>
          {this.renderForm()}
          <NormalButton onPress={this.handleNavigation} text="Login" />
        </View>
        <LoadingModal show={this.state.showLoadingModal} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  fetch: state.auth.fetch,
  res: state.auth.res,
  err: state.auth.err,
  action: state.auth.action,
})

const mapDispatchToProps = dispatch => ({
  onRequest: value => dispatch(authFetch(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInAuth)
