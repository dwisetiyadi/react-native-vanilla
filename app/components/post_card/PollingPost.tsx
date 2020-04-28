import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from 'react-native';
import thickWhiteIcon from '../../assets/images/tick-white.png';
import Colors from '../../styles/Colors';
import CardPost from './Card';
import CircleIcon from '../circle_icon';
import { StylesPollingPost } from './StylesPostCard';

interface IPollingPost {
  onLike?: Function;
  onComment?: Function;
  onShare?: Function;
  onSelect?: Function;
  data?: any
}

const PollingItem = ({ data, onSelect }: any) => {
  const { 
    title, 
    selected, 
    total, 
    image 
  } = data;
  let percentage = Math.round((selected * 100) / total || 0);
  return(
  <TouchableOpacity
    style={{
      width: '47%',
    }}
    onPress={onSelect}
  > 
    <ImageBackground 
      source={{ uri: image }}
      style={StylesPollingPost.image}
    >
      <Text
        style={{color: Colors.white}}
      >{percentage + '%'}</Text>
      <View 
        style={[
          StylesPollingPost.percentage, 
          {
            width: `${ percentage * 0.70 }%`
          }
        ]}
      />
    </ImageBackground>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}
    >
    <Text style={{marginTop: 5}}>{title}</Text>
    {/* {
      isChoosen &&  */}
      <CircleIcon 
        icon={thickWhiteIcon}
        stylesContainer={StylesPollingPost.circleIconContainer}
        stylesIcon={StylesPollingPost.circleIcon}
      />
    {/* } */}
    </View>
  </TouchableOpacity>
  )
}

class PollingPost extends React.Component <IPollingPost, any>{
  constructor(props: IPollingPost) {
    super(props);
  }

  render() {
    const { onSelect, data,  onLike, onComment, onShare } = this.props;
    return(
      <CardPost
        type="polling"
        data={data}
        onLike={onLike}
        onComment={onComment}
        onShare={onShare}
      >
        <View
          style={{
            marginTop: 10,
            paddingHorizontal: 15
          }}
        >
          <Text>{data.content}</Text>
          <View 
            style={StylesPollingPost.itemWrapper}
          >
            {
              (data.items || []).map(obj => (
                <PollingItem
                  data={obj}
                  onSelect={onSelect}
                />
              ))
            }  
          </View>
        </View>
      </CardPost>
    )
  }
}

export default PollingPost;