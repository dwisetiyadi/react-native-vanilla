/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';
import {
  Image, Text, TouchableWithoutFeedback, View,
} from 'react-native';
import moment from 'moment';
import StyleNews from '../StyleUsers';
import noPhoto from '../../../assets/images/no-photo.jpg';
import { IHeadlineListItem } from '../interfaces/components';

export const HeadlineListItem = ({ item, onPress }: IHeadlineListItem): JSX.Element => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={StyleNews.itemContainer}>
      <View style={StyleNews.imageContainer}>
        <Image
          source={item.urlToImage !== null ? { uri: item.urlToImage } : noPhoto}
          style={StyleNews.headlineImage}
          resizeMode="cover"
        />
      </View>
      <Text style={StyleNews.headlineSourceText}>
        {item.source.name}
      </Text>
      <Text style={StyleNews.headlineTitleText}>
        {item.title}
      </Text>
      <Text style={StyleNews.headlineTimeText}>
        {moment(item.publishedAt).fromNow()}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);
