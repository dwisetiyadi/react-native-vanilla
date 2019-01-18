/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated, Easing,
} from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import { userListClear, userListFetch } from '../ActionUsers';
import StyleUsers from '../StyleUsers';
import { NavigationOptions } from '../../../config/Platform';
import MyStatusBar from '../../../components/MyStatusBar';
import Styles from '../../../theme/Styles';
import _ from '../../../lang';

import Loading from '../../../assets/images/loading.png';

const ADD = 'Add';
const VIEW = 'View';

const initialState = {
  refreshing: false,
  page: 1,
};

const ListItem = ({ avatar, title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={StyleUsers.listItemContainer}>
    <Image source={{ uri: avatar }} style={StyleUsers.listItemImage} />
    <Text style={StyleUsers.listItemTitle}>
      {title}
    </Text>
  </TouchableOpacity>
);

class ListUsers extends Component {
  static navigationOptions = {
    title: _('List Pengguna'),
    ...NavigationOptions,
  }

  spinValue = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.state = initialState;
    this.navigateToDetail = this.navigateToDetail.bind(this);
  }

  async componentDidMount() {
    await this.props.onClearList();
    this.makeRemoteRequest();
    this.spin();
  }

  makeRemoteRequest = async (data) => {
    const pages = Math.ceil(this.props.total / 10);
    if (this.state.page <= pages || pages === 0) {
      const sentData = await { ...data, per_page: 10 };
      await this.props.onRequestList({ ...sentData });
    }
  }

  handleRefresh = async () => {
    this.setState(
      {
        refreshing: true,
        page: 1,
      },
      async () => {
        await this.props.onClearList();
        await this.makeRemoteRequest();
        this.setState({ refreshing: false });
      },
    );
  }

  handleLoadMore = () => {
    const { page } = this.state;
    const next = page + 1;
    this.setState(
      {
        refreshing: true,
        page: next,
      },
      async () => {
        await this.makeRemoteRequest({ page: this.state.page });
        this.setState({ refreshing: false });
      },
    );
  }

  spin() {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
      },
    ).start(() => this.spin());
  }

  navigateToDetail(type, id, userName) {
    this.props.navigation.navigate('UserDetail', { navType: type, id, userName });
  }

  renderFooter = () => {
    if (this.props.total === this.props.res.length) return null;

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '-360deg'],
    });
    return (
      <View style={StyleUsers.containerLoading}>
        <Animated.Image
          style={[StyleUsers.loading, { transform: [{ rotate: spin }] }]}
          source={Loading}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={Styles.container}>
        <MyStatusBar />
        <View>
          <FlatList
            data={this.props.res}
            contentContainerStyle={StyleUsers.listContainer}
            renderItem={
              ({ item }) => <ListItem
                avatar={item.avatar}
                title={`${item.first_name} ${item.last_name}`}
                onPress={() => this.navigateToDetail(VIEW, item.id, `${item.first_name} ${item.last_name}`)}
              />
            }
            keyExtractor={(item, index) => index.toString() + item.id.toString()}
            ListFooterComponent={this.renderFooter}
            refreshing={this.state.refreshing}
            onRefresh={this.handleRefresh}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.1}
          />
        </View>
        <ActionButton buttonColor="rgba(255, 87, 34, 1)" onPress={() => this.navigateToDetail(ADD)} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  fetch: state.user.fetchList,
  res: state.user.resList,
  err: state.user.errList,
  total: state.user.totalList,
  action: state.user.action,
});

const mapDispatchToProps = dispatch => ({
  onRequestList: value => dispatch(userListFetch(value)),
  onClearList: () => dispatch(userListClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
