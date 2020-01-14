/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Animated, Easing,
} from 'react-native';
import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import { userListClear, userListFetch } from '../ActionUsers';
import StyleUsers from '../StyleUsers';
import { NavigationOptions } from '../../../config/NavigationOptions';
import MyStatusBar from '../../../components/my_status_bar';
import Styles from '../../../styles';
import _ from '../../../lang';
import Loading from '../../../assets/images/loading.png';
import { 
  IListUsersState, 
  IListUsersProps,
  IListUsersListItemProps, 
} from '../interfaces/views';

const ADD = 'Add';
const VIEW = 'View';

const initialState: IListUsersState = {
  refreshing: false,
  page: 1,
};


const ListItem = ({ avatar, title, onPress }: IListUsersListItemProps): JSX.Element => (
  <TouchableOpacity onPress={onPress} style={StyleUsers.listItemContainer}>
    <Image source={{ uri: avatar }} style={StyleUsers.listItemImage} />
    <Text style={StyleUsers.listItemTitle}>
      {title}
    </Text>
  </TouchableOpacity>
);

class ListUsers extends React.Component<IListUsersProps, IListUsersState> {
  static navigationOptions = {
    title: _('List Pengguna'),
    ...NavigationOptions,
  }

  spinValue = new Animated.Value(0);

  constructor(props: IListUsersProps) {
    super(props);
    this.state = initialState;
    this.navigateToDetail = this.navigateToDetail.bind(this);
  }

  async componentDidMount() {
    await this.props.onClearList();
    this.makeRemoteRequest();
    this.spin();
  }

  makeRemoteRequest = async (data = {}): Promise<void> => {
    const pages = Math.ceil(this.props.total / 10);
    if (this.state.page <= pages || pages === 0) {
      const sentData = await { ...data, per_page: 10 };
      await this.props.onRequestList({ ...sentData });
    }
  }

  handleRefresh = async (): Promise<void> => {
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

  handleLoadMore = (): void => {
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

  spin(): void {
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

  navigateToDetail(type: string = '', id: number = 0, userName: string = ''): void {
    this.props.navigation.navigate('UserDetail', { navType: type, id, userName });
  }

  renderFooter = (): JSX.Element => {
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
      <View style={Styles.Main.container}>
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

const mapStateToProps = (state: any) => ({
  fetch: state.user.fetchList,
  res: state.user.resList,
  err: state.user.errList,
  total: state.user.totalList,
  action: state.user.action,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequestList: value => dispatch(userListFetch(value)),
  onClearList: () => dispatch(userListClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
