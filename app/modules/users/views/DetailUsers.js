import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { userListClear } from '../ActionUsers'
import { APIURI } from '../../../config/Api'
import { APIUSER } from '../ConfigUsers'
import MyInput from '../../../components/MyInput'
import StyleUsers from '../StyleUsers'
import { NavigationOptions } from '../../../config/Platform'
import { DangerButton, NormalButton } from '../../../components/Button'
import LoadingModal from '../../../components/LoadingModal'

const initialState = {
  nameInput: '',
  jobInput: '',
  showLoadingModal: false,
}

class DetailUsers extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('navType', 'Add'),
    ...NavigationOptions,
  })

  constructor(props) {
    super(props)

    this.state = {
      ...initialState,
      operationType: this.props.navigation.getParam('navType', 'Add'),
      nameInput: this.props.navigation.getParam('userName', ''),
    }
  }

  handleDelete() {
    this.setState(
      {
        showLoadingModal: true,
      },
      () => {
        axios.delete(`${APIURI}${APIUSER}`, { params: { id: this.props.navigation.getParam('id', 0) } })
          .then(() => {
            this.success(`${this.props.navigation.getParam('userName', '')} was deleted`)
          })
          .catch((error) => {
            this.error(error)
          })
      },
    )
  }

  handleInput() {
    this.setState(
      {
        showLoadingModal: true,
      },
      () => {
        const data = {
          name: this.state.nameInput,
          job: this.state.jobInput,
        }

        if (this.props.navigation.getParam('navType') === 'Add') {
          axios.post(`${APIURI}${APIUSER}`, { data })
            .then((response) => {
              console.log(response)
              this.success(`User ${response.data.data.name} as ${response.data.data.job}, has been created.`)
            })
            .catch((error) => {
              this.error(error)
            })
        }

        if (this.props.navigation.getParam('navType') === 'View') {
          axios.put(`${APIURI}${APIUSER}/${this.props.navigation.getParam('id', 0)}`, { data })
            .then((response) => {
              this.success(`Updated user ${response.data.data.name} as ${response.data.data.job}.`)
            })
            .catch((error) => {
              this.error(error)
            })
        }
      },
    )
  }

  success(message) {
    Alert.alert(
      'Success',
      message,
      [{
        text: 'Continue',
        onPress: () => this.setState({ showLoadingModal: false }, () => this.props.navigation.navigate('UserList')),
      }],
    )
  }

  error(error) {
    Alert.alert(
      'Error',
      error,
      [{
        text: 'Back',
        onPress: () => this.setState({ showLoadingModal: false }),
      }],
    )
  }

  renderForm() {
    return (
      <View style={StyleUsers.formContainer}>
        <MyInput
          onChangeText={text => this.setState({ nameInput: text })}
          placeholder="Name"
          value={this.state.nameInput}
          style={StyleUsers.nameInput}
        />
        <MyInput
          onChangeText={text => this.setState({ jobInput: text })}
          placeholder="Job"
          value={this.state.jobInput}
        />
      </View>
    )
  }

  renderButtons() {
    if (this.state.operationType === 'Add') {
      return (
        <NormalButton
          onPress={() => this.handleInput()}
          text={this.state.operationType === 'Add' ? 'Add' : 'Update'}
          containerStyle={StyleUsers.addButton}
        />
      )
    }
    return (
      <View style={StyleUsers.buttonsContainer}>
        <NormalButton
          onPress={() => this.handleInput()}
          text={this.state.operationType === 'Add' ? 'Add' : 'Update'}
          containerStyle={StyleUsers.nameInput}
        />
        <DangerButton
          onPress={() => this.handleDelete()}
          text="Delete"
        />
      </View>
    )
  }

  render() {
    return (
      <View style={StyleUsers.container}>
        {this.renderForm()}
        {this.renderButtons()}
        <LoadingModal show={this.state.showLoadingModal} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onClearList: () => dispatch(userListClear()),
})

export default connect(null, mapDispatchToProps)(DetailUsers)
