import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import Styles from './StylesPostCard';
import openMenuGrayIcon from '../../assets/images/open-menu-gray.png';
import commentGrayIcon from '../../assets/images/comment-gray.png';
import likeGrayIcon from '../../assets/images/like-gray.png';
import shareGrayIcon from '../../assets/images/share-gray.png';
import { post_types } from './TYPES';

interface ICardPost {
  onLike?: Function;
  onComment?: Function;
  onShare?: Function;
  data?: any;
  type?: string;
}

class CardPost extends React.Component<ICardPost, any> {

  constructor(props: ICardPost) {
    super(props);
    this.TemplateFooter = this.TemplateFooter.bind(this);
    this.TemplateHeader = this.TemplateHeader.bind(this);
    this.TemplatePostStatus = this.TemplatePostStatus.bind(this);
    this.onLike = this.onLike.bind(this);
    this.onComment = this.onComment.bind(this);
    this.onShare = this.onShare.bind(this);
  }

  onLike(type, id) {
    let { onLike } = this.props;
    if(typeof onLike === 'function') onLike();
    
  }
  onComment(type, id) {
    let { onComment } = this.props;
    if(typeof onComment == 'function') onComment();
    
  }
  onShare(type, id) {
    let { onShare } = this.props;
    if(typeof onShare == 'function') onShare();
    
  } 

  TemplatePostStatus(): JSX.Element {
    const { type } = this.props;
    let action = '',
        obj = '';
    switch(type) {
      case post_types.SHARE: 
        action = ' shared';
        obj = ' a link';
        break;
      case post_types.POLLING:
        action = ' created a';
        obj = ' Poll';
        break;
      case post_types.FINISH_TASK:
        action = ' finish';
        obj = ' an assignment';
      default:
        action = ' shared';
        obj = ' a link';
        break;
    }
    return (
        <>
          <Text>{action}</Text>
          <Text style={{ fontWeight: 'bold'}}> {obj}</Text>
        </>
    )
  }
  TemplateHeader(): JSX.Element {
    return (
      <View style={Styles.header}>
        <View style={Styles.headerUser}>
          <Image 
            style={Styles.image}
            source={{ uri: 'https://placeimg.com/640/480/people'}}
          />
          <View style={{ marginLeft: 5}}>
            <View style={{ flexDirection: 'row'}}>
              <Text style={{ fontWeight: 'bold'}}>
                Linda Steward
              </Text>
              {this.TemplatePostStatus()}
            </View>
            <Text>12  mins</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image 
            style={{ height: 18, width: 18 }}
            source={openMenuGrayIcon}
          />
        </TouchableOpacity>
      </View>
    )
  }

  FooterIcon({icon, label, onPress}): JSX.Element {
    return (
      <TouchableOpacity 
        onPress={onPress}
        style={Styles.footerIconWrapper}
      >
        <Image 
          source={icon}
          style={Styles.footerIcon}
        />
        <Text style={Styles.footerIconLabel}>{label}</Text>
      </TouchableOpacity>
    )
  }

  TemplateFooter(): JSX.Element {
    let { data } = this.props;

    let { 
      likesCount, 
      commentsCount, 
      sharesCount 
    } = data;

    let commentText = '',
        likeText = '',
        shareText = '',
        actionInfo = '';
    let beforText = false
    
    if(likesCount){
      likeText = `${likesCount} Likes`;
      beforText = true;
    }
    if(commentsCount){
      if(beforText) {
        commentText = `, ${commentsCount} Comment`;
      } else {
        commentText = `${commentsCount} Comment`;
      }
      beforText = true;
    }
    if(sharesCount){
      if(beforText) {
        shareText = `, ${sharesCount} Shares`;
      } else {
        shareText = `${sharesCount} Shares`;
      }

    }
    actionInfo = likeText 
                + commentText
                + shareText;
    return (
      <View style={{paddingHorizontal: 15}}>
        <View
          style={{ marginTop: 8}}
        >
          <Text style={{ fontSize: 11 }}>{actionInfo}</Text>
        </View>
        <View style={Styles.footerWrapper}>
          <this.FooterIcon 
            icon={likeGrayIcon}
            label="Likes"
            onPress={this.onLike}
          />
          <this.FooterIcon 
            icon={commentGrayIcon}
            label="Comments"
            onPress={this.onComment}
          />
          <this.FooterIcon 
            icon={shareGrayIcon}
            label="Shares"
            onPress={this.onShare}
          />
        </View>
      </View>
    )
  }
  render() {
    const { children } = this.props;
    return (
      <View style={Styles.container}>
        {this.TemplateHeader()}
        {children}
        {this.TemplateFooter()}
      </View>
    )     
  }
}

export default CardPost;