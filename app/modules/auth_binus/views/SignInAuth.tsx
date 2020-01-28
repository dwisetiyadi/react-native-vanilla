/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  View, Alert, AsyncStorage, Text,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import MyStatusBar from '../../../components/my_status_bar';
import { NormalButton } from '../../../components/button';
import MyInput from '../../../components/my_input';
import LoadingModal from '../../../components/loading_modal';
import StyleAuth from '../StyleAuth';
import { authFetch } from '../ActionAuth';
import _ from '../../../lang';
import { 
  IBinusSignInAuthProps,
  IBinusSignInAuthState,
} from '../interfaces/views';
import {
  setToken,
  getToken
} from '../../../config/Helpers'


class BinusSignInAuth extends Component<IBinusSignInAuthProps, any> {
  constructor(props: IBinusSignInAuthProps) {
    super(props);

    //JSX
    this.TemplateForm = this.TemplateForm.bind(this);
    this.TempalteButton = this.TempalteButton.bind(this);

    //VOID
    this.onFormValueChange = this.onFormValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.loginCallback = this.loginCallback.bind(this);

    this.state = {
      showLoadingModal: false,
      action: this.props.action,
      err: this.props.err,
      res: this.props.res,
      form: {
        username: '',
        password: ''
      }
    };
  }
  componentDidMount() {
    this.setState({showLoadingModal: false});
    getToken((res) => {
      if(res) {
        this.props.navigation.navigate('App')
      }
      this.setState({showLoadingModal: true});
    })
  }

  onFormValueChange(value, name): void {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value
      }
    })
  }

  onSubmit(): void {
    this.setState({ showLoadingModal: true })
    const { onRequest } = this.props;
    if(typeof onRequest == 'function') {
      onRequest(this.state.form, this.loginCallback)
    }
  }

  loginCallback(value?: any): void {
    setTimeout(
     () => setToken(value.token, (response) => {
        this.setState({ showLoadingModal: false })
        if(response) {
          this.props.navigation.navigate('App')
        } else {
          alert("failure")
        }
      }),
      1000
    )
    
  }

  TemplateForm(): JSX.Element {
    const { username, password } = this.state;
    return (
      <View
        style={StyleAuth.formContainer}
      >
        <MyInput
          onChangeText={text => this.onFormValueChange(text, 'username')}
          value={username}
          placeholder={_('Username')}
          autoCapitalize="none"
          autoCorrect={false}
          style={StyleAuth.emailInput}
        />
        <MyInput
          onChangeText={text => this.onFormValueChange(text, 'password')}
          value={password}
          placeholder={_('Sandi')}
          secureTextEntry
          style={StyleAuth.emailInput}
        />
      </View>
    );
  }
  TemplateHeader(): JSX.Element {
    return (
      <View style={StyleAuth.headerContainer}>
        <Text style={StyleAuth.headerTitle}>BINUS MAYA</Text>
      </View>
    )
  }

  TempalteButton(): JSX.Element {
    return (
      <View style={StyleAuth.buttonWrapper}>
        <NormalButton
          onPress={() => this.onSubmit()}
          text={'login'}
          containerStyle={StyleAuth.buttonLogin}
        />
      </View>
    )
  }

  render() {
    return (
      <LinearGradient 
        colors={['#1C98D6', '#863A92']} 
        start={{x:0, y: 0}} 
        end={{ x: 1, y: 1 }} 
        style={{ height: '100%', width: '100%'}}
      >
        <View style={StyleAuth.container}>
          {this.TemplateHeader()}
          {this.TemplateForm()}
          {this.TempalteButton()}
        </View>
        <LoadingModal  show={this.state.showLoadingModal} />
      </LinearGradient>
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
  onRequest: (value: Object, callback: Function) => dispatch(authFetch(value, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BinusSignInAuth);
