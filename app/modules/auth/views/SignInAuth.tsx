/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import { Component } from 'react';
import {
  View, Alert, AsyncStorage, Text,
} from 'react-native';
import { connect } from 'react-redux';
import MyStatusBar from '../../../components/my_status_bar';
import { NormalButton } from '../../../components/button';
import MyInput from '../../../components/my_input';
import LoadingModal from '../../../components/loading_modal';
import StyleAuth from '../StyleAuth';
import { authFetch } from '../ActionAuth';
import {
  AUTHSUCCESS, AUTHFAILED, LOGGEDIN,
} from '../ConfigAuth';
import _ from '../../../lang';

interface props {
  action: any,
  err: any,
  res: any
  navigation: any,
  onRequest: any
}

interface states {
  action: any,
  err: any,
  res: any,
  emailInput: any,
  passwordInput: any,
  showLoadingModal: boolean
}

class SignInAuth extends Component<props, states> {
  constructor(props: any) {
    super(props);
    this.state = {
      emailInput: '',
      passwordInput: '',
      showLoadingModal: false,
      action: this.props.action,
      err: this.props.err,
      res: this.props.res,
    };
    this.handleNavigation = this.handleNavigation.bind(this);
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.action !== prevState.action) {
      let nextErr = prevState.err;
      let nextRes = prevState.res;

      if (nextProps.action === AUTHFAILED) {
        nextErr = nextProps.err;
      }
      if (nextProps.action === AUTHSUCCESS) {
        nextRes = nextProps.res;
      }

      return {
        action: nextProps.action,
        err: nextErr,
        res: nextRes,
      };
    }

    return null;
  }

  async componentDidUpdate(prevProps: any, prevState: any) {
    if (prevState.action !== this.state.action) {
      if (this.state.action === AUTHFAILED) {
        Alert.alert(
          'Error',
          this.state.err,
          [
            {
              text: 'Ok',
              onPress: () => {
                this.setState({ showLoadingModal: false });
              },
            },
          ],
        );
      }

      if (this.state.action === AUTHSUCCESS) {
        await AsyncStorage.setItem('condition', LOGGEDIN);
        await AsyncStorage.setItem('token', this.state.res);
        /* eslint-disable react/no-did-update-set-state */
        this.setState({ showLoadingModal: false });
        /* eslint-enable react/no-did-update-set-state */
        this.props.navigation.navigate('App');
      }
    }
  }

  handleNavigation() {
    this.setState({ showLoadingModal: true });
    const data = {
      email: this.state.emailInput,
      password: this.state.passwordInput,
    };
    this.props.onRequest(data);
  }

  renderForm() {
    return (
      <View
        style={StyleAuth.formContainer}
      >
        <MyInput
          onChangeText={(text: any) => this.setState({ emailInput: text })}
          value={this.state.emailInput}
          placeholder={_('Surel', '')}
          autoCapitalize="none"
          autoCorrect={false}
          style={StyleAuth.emailInput}
        />
        <MyInput
          onChangeText={(text: any) => this.setState({ passwordInput: text })}
          value={this.state.passwordInput}
          placeholder={_('Sandi', '')}
          secureTextEntry
        />
      </View>
    );
  }

  render() {
    return (
      <View style={StyleAuth.container}>
        <MyStatusBar />
        <View>
          <Text>{_('Masuk', '')}</Text>
        </View>
        <View style={StyleAuth.innerContainer}>
          {this.renderForm()}
          <NormalButton onPress={this.handleNavigation} text={_('Masuk', '')} />
        </View>
        <LoadingModal show={this.state.showLoadingModal} />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  fetch: state.auth.fetch,
  res: state.auth.res,
  err: state.auth.err,
  action: state.auth.action,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequest: (value: any) => dispatch(authFetch(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInAuth);
