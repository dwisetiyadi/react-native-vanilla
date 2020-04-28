import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';
import { IHeaderStudent } from './interfaces';
import Styles from './StyleHeaderStudent';
import CircleIcon from '../circle_icon';
import Colors from '../../styles/Colors';
import markerGrayIcon from '../../assets/images/marker-gray.png';
import searchGrayIcon from '../../assets/images/search-gray.png';

const HeaderStudent = ({ isHome }: IHeaderStudent): JSX.Element => {
  return (
    <View style={Styles.container}>
    <View>
      <Image
        style={Styles.image}
        source={{ uri: 'https://placeimg.com/640/480/people'}}
      />
    </View>
    <View style={Styles.iconGroupContainer}>
      {
        isHome && 
       <TouchableOpacity>
        <CircleIcon 
          icon={markerGrayIcon}
          stylesContainer={{
            backgroundColor: Colors.white,
            marginRight: 10
          }}
          stylesIcon={{
            width: 20,
            height: 20,
          }}
        />
       </TouchableOpacity> 
      }
      <TouchableOpacity>
        <CircleIcon 
          icon={searchGrayIcon}
          stylesContainer={{
            backgroundColor: Colors.white
          }}
          stylesIcon={{
            width: 20,
            height: 20,
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default HeaderStudent;