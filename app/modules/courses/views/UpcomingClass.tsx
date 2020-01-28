import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Animated,
  ScrollView,
} from 'react-native';
import { 
  NavigationScreenProp, 
  NavigationState, 
  NavigationParams 
} from 'react-navigation';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import {
  classListClear,
  classListFetch
} from '../ActionClass';
import StyleClass from '../StyleClass';
import { NavigationOptions } from '../../../config/NavigationOptions';
import Styles from '../../../styles';
import _ from '../../../lang';
import { 
  IListClassState, 
  IListClassProps,
  IListClassListItemProps,
  IListClassItemProps,
} from '../interfaces/views';
import {
  Session,
  ProgressBar,
  Avatar,
  Icon,
} from '../components/list/index';
import LinearGradient from 'react-native-linear-gradient';
import HeaderStudent from '../../../components/header_student';

const initialState: IListClassState = {
  refreshing: false,
  page: 1,
  isToday: true,
};

//Placeholder
const LecturerPhoto: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg';
const RoomIcon: string = 'https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-20-512.png';
const TimeIcon: string = 'https://cdn0.iconfinder.com/data/icons/feather/96/clock-512.png';

const ListItem = ({ session, campusroom, time, classname, id, lecturername, progressvalue, isToday }: IListClassListItemProps): JSX.Element => (  
  <TouchableOpacity style={StyleClass.listItemContainer}>
    <Session session={session} />
    <Text style={StyleClass.listItemId}>
      {id}
    </Text>
    <Text style={StyleClass.listItemClass}>
      {classname}
    </Text>
    <View style={StyleClass.viewLecturer}>
      <Avatar avatar={LecturerPhoto} />
      <Text style={StyleClass.listItemLecturer}>
        {lecturername}
      </Text>
    </View>
    {isToday?
      <View style={StyleClass.viewRoomTime}>
        <View style={StyleClass.viewRoom}>
          <Icon icon={RoomIcon} />
          <Text style={StyleClass.listItemRoom}>
            {campusroom}
          </Text>
        </View>
        <View style={StyleClass.viewTime}>
          <Icon icon={TimeIcon} />
          <Text style={StyleClass.listItemTime}>
            {time}
          </Text>
        </View>
      </View>
    : null}
    <View style={StyleClass.viewProgress}>
      <View style={StyleClass.viewProgressText}>
        <Text style={StyleClass.listProgress}>
          Class progress:
        </Text>
        <Text style={StyleClass.listProgressPercent}>
          {progressvalue}
        </Text>
      </View>
      <ProgressBar progress={progressvalue} />
    </View>
  </TouchableOpacity>
);

class UpcomingClass extends React.Component<IListClassProps, IListClassState> {
  static navigationOptions = {
    ...NavigationOptions,
  }

  spinValue = new Animated.Value(0);

  constructor(props: IListClassProps) {
    super(props);
    this.state = initialState;
  }

  async componentDidMount() {
    await this.props.onClearList();
    this.makeRemoteRequest();    
  }

  makeRemoteRequest = async (data = {}): Promise<void> => {
    const pages = Math.ceil(this.props.total / 10);
    if (this.state.page <= pages || pages === 0) {
      const sentData = await {
        ...data, 
        filter: this.state.isToday,
        per_page: 10
      };
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

  handleRangeSwitch = async (): Promise<void> => {
    const { isToday } = this.state;
    if(isToday === true) {
      this.setState(
        {
          isToday: false,
          refreshing: true,
        },
        async () => {
          await this.props.onClearList();
          await this.makeRemoteRequest();
          this.setState({ refreshing: false });
        },
      )
    } else {
      this.setState(
        {
          isToday: true,
          refreshing: true,
        },
        async () => {
          await this.props.onClearList();
          await this.makeRemoteRequest();
          this.setState({ refreshing: false });
        },
      )
    }    
  }

  render() {
    const { isToday } = this.state;
    const { res } = this.props;


    return (
      <View style={StyleClass.classTopContainer}>
        <ScrollView contentContainerStyle={StyleClass.classContainer}>
          <LinearGradient colors={['#7b2183', '#3e1841']} style={StyleClass.linearGradient}>
            <View style={StyleClass.headerClass}>
              <HeaderStudent/>
            </View>
            <View>
              <Text style={StyleClass.textMyClass}>My Courses</Text>
              <View style={StyleClass.buttonContainer}>
                <TouchableOpacity
                  onPress={this.handleRangeSwitch}
                  disabled={isToday? true: false}
                >
                  <Text style={isToday? StyleClass.buttonActive: StyleClass.buttonDisabled}>
                    Today
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.handleRangeSwitch}
                  disabled={isToday? false: true}
                >
                  <Text style={isToday? StyleClass.buttonDisabled: StyleClass.buttonActive}>
                    All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.props.res}
                contentContainerStyle={StyleClass.listContainer}
                renderItem={
                  ({item} : any) => <ListItem
                    id={`${item.id}`}
                    session={`Session ${item.room.sesi.id}`}
                    classname={`${item.course.judul}`}
                    lecturername={`${item.lecturer.nama}`}
                    campusroom={`${item.room.kode} - ${item.room.kampus}`}
                    time={`${item.room.sesi.jamAwal} - ${item.room.sesi.jamAkhir}`}
                    progressvalue={`${item.progress}%`}
                    isToday={this.state.isToday}
                  />
                }
                keyExtractor={(item, index) => index.toString() }
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0.1}
                extraData={this.state.isToday}
              />
            </View>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  fetch: state.class.fetchList,
  res: state.class.resList,
  err: state.class.errList,
  total: state.class.totalList,
  action: state.class.action,
});

const mapDispatchToProps = (dispatch: any) => ({
  onRequestList: value => dispatch(classListFetch(value)),
  onClearList: () => dispatch(classListClear()),  
});

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingClass);
