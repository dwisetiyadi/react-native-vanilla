/**
 * @author: dwi.setiyadi@gmail.com
*/

import React, { Component } from 'react';
import {
  View, 
  Text,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import LoadingModal from '../../../components/loading_modal';
import _ from '../../../lang';
import {
  setToken
} from '../../../config/Helpers';
import StyleHome from '../StyleHome';
import { ButtonWithIcon, Post, OnGoingClass, UpCommingClass } from '../components/';
import ButtonNavigationGroup from '../../../components/button_navigation_group';
import PollingPost from '../../../components/post_card/PollingPost';
import HeaderStudent from '../../../components/header_student';
import { classFetch } from '../ActionHome';
import {
  CLASSSUCCESS
} from '../ConfigHome';
import { IHomeProps } from '../interfaces/views'

class HomeComponent extends Component<IHomeProps, any> {
  constructor(props: IHomeProps) {
    super(props);

    this.onNavigate = this.onNavigate.bind(this);
    this.onLikePost = this.onLikePost.bind(this);
    this.onCommentPost = this.onCommentPost.bind(this);
    this.onSharePost = this.onSharePost.bind(this);
    this.onSelectPollingItem = this.onSelectPollingItem.bind(this);

    this.TemplateBody = this.TemplateBody.bind(this);

    this.state = {
      onGoingClass: {
        class_code: 'BBN0653',
        class_name: 'Visual Communication Design I',
        class_schedule: new Date(),
        class_duration: 90,
        lecturer_name: 'Liliek Adelina Suhardjono S.Sn., M.Art',
        lecturer_image: 'https://placeimg.com/640/480/people'
      },
      upCommingClass: {
        id: 4,
        class: {
          code: '123KNE',
          name: 'English For Computer 2',
          room: '204 - anggrek campus',
          schedule: '09:30 - 12:00'
        },
        lecturer: {
          name: 'Liliek Adelina Suhardjono S.Sn., M.Art',
          image: 'https://placeimg.com/640/480/people'
        },
        tasks: [
          {
            id: 1,
            name: 'Video to watch',
            duration: '3m'
          },
          {
            id: 2,
            name: 'Video to watch',
            duration: '3m'
          },
          {
            id: 3,
            name: 'Video to watch',
            duration: '3m'
          },
          {
            id: 4,
            name: 'Video to watch',
            duration: '3m'
          }
        ],
        progress: 10
      },
      classes: [],
      pollingPost: [
        {
          id:1,
          content: 'minta pollingnya ya',
          likesCount: 6,
          commentsCount: 5,
          sharesCount: 8,
          items: [
            {
              image: 'https://placeimg.com/640/480/nature',
              title: 'Cianjur',
              selected: 5,
              total: 11
            },
            {
              image: 'https://placeimg.com/640/480/nature',
              title: 'Jakarta',
              selected: 6,
              total: 11
            }
          ]
        }
      ],
      showLoadingModal: false,
      action: this.props.homeAction,
      err: this.props.homeErr,
      res: this.props.homeRes,
    };
  }
  componentDidMount() {
    const { classFetch } = this.props;
    if(typeof classFetch == 'function') {
      classFetch();
    }
  }
  componentWillReceiveProps(props) {
    if(props.homeAction == CLASSSUCCESS) {
      this.setState({
        ...this.state,
        classes: props.homeRes.data
      })

    }
  }
  onLikePost(type, id): void {
    alert("onLikePost")
  }
  onCommentPost(type, id): void {
    alert("onCommentPost")

  }
  onSharePost(type, id): void {
    alert("onSharePost")
     
  }
  onSelectPollingItem(id): void {
    alert("onSelectPollingItem")

  }
  
  onNavigate(view) {
    console.log("onNavigate", view)
    this.props.navigation.navigate(view)
  }

  TemplateHeader(): JSX.Element {
    const { user } = (this.props.authRes || {}).data || {};
    return  <View style={StyleHome.headerWrapper}>
              <HeaderStudent 
                isHome
              />
              <View style={StyleHome.headerTextWrapper}>
                <Text style={StyleHome.headerTextGreeting}>{_('Good Morning')},</Text>
                <Text style={StyleHome.headerTextName}>{(user || {}).username || 'No Name'}</Text>
              </View>
            </View>
  }

  TemplateBody(): JSX.Element {
    const { pollingPost, onGoingClass, upCommingClass } = this.state;
    return (
      <>
        <ButtonNavigationGroup />
        <Post
          onPostPress={() => this.onNavigate('FormPost')}
        />
        <OnGoingClass
          styleBackground={StyleHome.onGoingClassBackground}
          data={onGoingClass}
        />
        <UpCommingClass 
          data={upCommingClass}
        />
        {
          (pollingPost || []).map(obj => (
            <PollingPost
              key={obj.id} 
              onLike={this.onLikePost}
              onComment={this.onCommentPost}
              onShare={this.onSharePost}
              onSelect={this.onSelectPollingItem}
              data={obj}
            />
          ))
        }
      </>
    )
  }

  render() {
    console.log("this.props: ", this.props)
    return (
      <ScrollView
      style={{ flex: 1 }}
    >
      <LinearGradient 
        colors={['#1C9AD7', '#7F3485']} 
        start={{x:0, y: 0}} 
        end={{ x: 1, y: 1 }} 
        style={{ minHeight: '100%', width: '100%', marginBottom: 18, padding: 16 }}
      >
          {this.TemplateHeader()}
          {this.TemplateBody()}
        
      </LinearGradient>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state: any) => ({
  homeFetch: state.home.fetch,
  homeErr: state.home.err,
  homeRes: state.home.res,
  homeAction: state.home.action,

  authRes: state.auth.res,
});

const mapDispatchToProps = (dispatch: any) => ({
  // onRequest: (value: Object, callback: Function) => dispatch(authFetch(value, callback)),
  classFetch: () => dispatch(classFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
