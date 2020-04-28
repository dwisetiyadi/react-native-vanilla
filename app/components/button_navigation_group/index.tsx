import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import Styles from './StyleButtonNavigationGroup';
import presentationIcon from '../../assets/images/presentation.png';
import forumIcon from '../../assets/images/forum.png';
import menuIcon from '../../assets/images/menu.png';
import scoreIcon from '../../assets/images/score.png';
import CircleIcon from '../circle_icon';

const NavButton = ({styleButton, isHasNotif, iconImage, label, onPress}: any): JSX.Element => {
  return  <View style={Styles.buttonWrapper}>
            <TouchableOpacity 
              onPress={onPress}
            >
              <CircleIcon 
                icon={iconImage}
                stylesContainer={[Styles.button,styleButton]}
                isHasNotif={isHasNotif}
              />
            </TouchableOpacity>
            <Text style={Styles.label}>{label}</Text>
          </View>
}

class ButtonNavigationGroup extends React.Component<any, any> {


  render() {
    return  <View style={Styles.container}>
              <NavButton 
                styleButton={{
                  backgroundColor: '#EF8600'
                }}
                iconImage={presentationIcon}
                label={'Assignment'}
                isHasNotif
              />
              <NavButton 
                styleButton={{
                  backgroundColor: '#EF8600'
                }}
                iconImage={forumIcon}
                label={'Forum'}
                isHasNotif
              />
              <NavButton 
                styleButton={{
                  backgroundColor: '#EF8600'
                }}
                iconImage={scoreIcon}
                label={'Score'}
              />
              <NavButton 
                styleButton={{
                  backgroundColor: '#B3B3B3'
                }}
                iconImage={menuIcon}
                label={'More'}
                isHasNotif
              />
            </View>
  }
}

export default ButtonNavigationGroup;