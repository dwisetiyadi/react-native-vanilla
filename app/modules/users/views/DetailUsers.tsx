/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { userListClear } from '../ActionUsers';
import { APIURI } from '../../../config/Api';
import { APIUSER } from '../ConfigUsers';
import MyInput from '../../../components/my_input';
import StyleUsers from '../StyleUsers';
import { NavigationOptions } from '../../../config/NavigationOptions';
import MyStatusBar from '../../../components/my_status_bar';
import { DangerButton, NormalButton } from '../../../components/button';
import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';
import _ from '../../../lang';
import LoadingModal from '../../../components/loading_modal';
import { any } from 'prop-types';
import { 
  IDetailUsersProps, 
  IDetailUsersState 
} from '../interfaces/views';

const initialState: IDetailUsersState = {
  nameInput: '',
  jobInput: '',
  showLoadingModal: false,
  operationType : null,
};

class DetailUsers extends Component<IDetailUsersProps, IDetailUsersState> {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.getParam('navType') === 'Add') ? _('Tambah') : _('Lihat'),
    ...NavigationOptions,
  })

  constructor(props: IDetailUsersProps) {
    super(props);

    this.state = {
      ...initialState,
      operationType: this.props.navigation.getParam('navType', 'Add'),
      nameInput: this.props.navigation.getParam('userName', ''),
    };
  }

  handleDelete(): void {
    this.setState(
      {
        showLoadingModal: true,
      },
      () => {
        axios.delete(`${APIURI}${APIUSER}`, { params: { id: this.props.navigation.getParam('id', 0) } })
          .then(() => {
            this.success(`${this.props.navigation.getParam('userName', '')} ${_('telah dihapus')}`);
          })
          .catch((error) => {
            this.error(error);
          });
      },
    );
  }

  handleInput(): void {
    this.setState(
      {
        showLoadingModal: true,
      },
      () => {
        const data = {
          name: this.state.nameInput,
          job: this.state.jobInput,
        };

        if (this.props.navigation.getParam('navType') === 'Add') {
          axios.post(`${APIURI}${APIUSER}`, { data })
            .then((response) => {
              this.success(`${_('Pengguna')} ${response.data.data.name} ${_('sebagai')} ${response.data.data.job}, ${_('telah dibuat')}.`);
            })
            .catch((error) => {
              this.error(error);
            });
        }

        if (this.props.navigation.getParam('navType') === 'View') {
          axios.put(`${APIURI}${APIUSER}/${this.props.navigation.getParam('id', 0)}`, { data })
            .then((response) => {
              this.success(`${_('Pengguna')} ${response.data.data.name} ${_('sebagai')} ${response.data.data.job}, ${_('telah diubah')}.`);
            })
            .catch((error) => {
              this.error(error);
            });
        }
      },
    );
  }

  success(message): void {
    Alert.alert(
      _('Berhasil'),
      message,
      [{
        text: _('Lanjut'),
        onPress: () => this.setState({ showLoadingModal: false }, () => this.props.navigation.navigate('UserList')),
      }],
    );
  }

  error(error): void {
    Alert.alert(
      'Error',
      error,
      [{
        text: 'Back',
        onPress: () => this.setState({ showLoadingModal: false }),
      }],
    );
  }

  renderForm(): JSX.Element {
    return (
      <View style={StyleUsers.formContainer}>
        <MyStatusBar />
        <MyInput
          onChangeText={text => this.setState({ nameInput: text })}
          placeholder={_('Nama')}
          value={this.state.nameInput}
          style={StyleUsers.nameInput}
        />
        <MyInput
          onChangeText={text => this.setState({ jobInput: text })}
          placeholder={_('Pekerjaan')}
          value={this.state.jobInput}
        />
      </View>
    );
  }

  renderButtons(): JSX.Element {
    if (this.state.operationType === 'Add') {
      return (
        <NormalButton
          onPress={() => this.handleInput()}
          text={this.state.operationType === 'Add' ? _('Tambah') : _('Ubah')}
          containerStyle={StyleUsers.addButton}
        />
      );
    }
    return (
      <View style={StyleUsers.buttonsContainer}>
        <NormalButton
          onPress={() => this.handleInput()}
          text={this.state.operationType === 'Add' ? _('Tambah') : _('Ubah')}
          containerStyle={StyleUsers.nameInput}
        />
        <DangerButton
          onPress={() => this.handleDelete()}
          text={_('Hapus')}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={StyleUsers.container}>
        {this.renderForm()}
        {this.renderButtons()}
        <LoadingModal show={this.state.showLoadingModal} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  onClearList: () => dispatch(userListClear()),
});

export default connect(null, mapDispatchToProps)(DetailUsers);
