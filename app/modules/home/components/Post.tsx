import React from 'react';
import {
  View, 
  TouchableOpacity,
  StyleSheet,
  Image,
  Text
} from 'react-native';
import _ from '../../../lang';
import cameraIcon from '../../../assets/images/camera.png';
import livaCameraIcon from '../../../assets/images/live-camera.png';

const Post = ({stylePost, onPostPress, iconName, iconSize, iconColor}: any) => {
  return <View
          style={Styles.container}
          >
            <View style={Styles.upSection}>
              <Image
                style={Styles.Image}
                source={{ uri: 'https://placeimg.com/640/480/people'}}
              />
              <TouchableOpacity
                style={Styles.form}
                onPress={onPostPress}
              >
                <Text style={Styles.textForm}>{_(`What's on your mind`)}?</Text>
              </TouchableOpacity>
            </View>
            <View style={Styles.bottomSection}>
              <TouchableOpacity style={Styles.iconWrapper}>
                <Image 
                  source={livaCameraIcon}
                  style={Styles.Icon}
                />
                <Text style={Styles.iconLabel}>{_('Live')}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.iconWrapper}>
                <Image 
                  source={cameraIcon}
                  style={Styles.Icon}
                />
                <Text style={Styles.iconLabel}>{_('Camera')}</Text>
              </TouchableOpacity>
            </View>
        </View>
}

const Styles = StyleSheet.create({
  container: {
    height: 100,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#242424',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  upSection: {
    height: 60,
    paddingHorizontal: 20,
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomSection: {
    height: 40,
    paddingHorizontal: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },
  Image: {
    height: 35,
    width: 35,
    borderRadius: 35
  },
  form: {
    backgroundColor: '#F2F2F2',
    height: 35,
    width: '80%',
    paddingLeft: 10,
    borderRadius: 5,
  },
  textForm: {
    lineHeight: 35,
    color: '#D5D5D5'
  },
  iconWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Icon: {
    height: 18,
  },
  iconLabel: {
    color: '#fff',
    marginLeft: 5
  }
})

export default Post;