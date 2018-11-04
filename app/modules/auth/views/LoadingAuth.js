import React, { Component } from 'react'
import {
  View, AsyncStorage,
} from 'react-native'
import { LOGGEDIN, LOGGEDOUT } from '../ConfigAuth'
import LoadingModal from '../../../components/LoadingModal'

const initialState = {
  showLoadingModal: false,
}

class loading extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  async componentDidMount() {
    this.setState({ showLoadingModal: true })
    const condition = await AsyncStorage.getItem('condition')
    switch (condition) {
      case LOGGEDOUT:
      default:
        this.props.navigation.navigate('Auth')
        break

      case LOGGEDIN:
        this.props.navigation.navigate('App')
        break
    }
  }

  render() {
    return (
      <View>
        <LoadingModal show={this.state.showLoadingModal} />
      </View>
    )
  }
}

export default loading
