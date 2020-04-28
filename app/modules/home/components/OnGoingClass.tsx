import React from 'react';
import {
  View, 
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
} from 'react-native';
import { IOnGoingClassProps } from '../interfaces/components';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../styles/Colors';
import ClassStatus from '../../../components/circle_icon_with_label'
import markerIcon from '../../../assets/images/marker.png';
import watchIcon from '../../../assets/images/watch.png';

const ClassDuration = (): JSX.Element => {
  return  <View style={Styles.classDuration}>
            <Image 
              source={watchIcon}
              style={Styles.watchIcon}
            />
            <Text style={Styles.labelClassDuration}>0:46/90:00</Text>
          </View>
}

class OnGoingClass extends React.Component<IOnGoingClassProps, any> {
  constructor(props: IOnGoingClassProps) {
    super(props);
    this.TemplateHeader = this.TemplateHeader.bind(this);
    this.TemplateClassInfo = this.TemplateClassInfo.bind(this);
    this.TemplateLecturerInfo = this.TemplateLecturerInfo.bind(this);
  }

  TemplateHeader(): JSX.Element {
    return <View style={Styles.classInfo}>
              <ClassStatus
                label="Attending"
                sourceIconImage={markerIcon}
              />
              <ClassDuration />
            </View>
  }
  TemplateClassInfo(): JSX.Element {
    const { data } = this.props;
    return <View style={Styles.classInfoTwo}>
            <Text style={Styles.classCode}>{data.class_code}</Text>
            <Text style={Styles.className}>{data.class_name}</Text>
          </View>
  }
  TemplateLecturerInfo(): JSX.Element {
    const { data } = this.props;
    return <View style={Styles.lecturerInfoWrapper}>
            <Image
              style={Styles.lecturerImage}
              source={{ uri: data.lecturer_image }}
            />
            <Text style={Styles.lecturerName}>{data.lecturer_name}</Text>
          </View>
  }


  render() {
    const { styleBackground } = this.props;
    return (
      <ImageBackground
          source={{ uri: 'https://placeimg.com/640/480/arch' }}
          style={[Styles.backgroungImage, styleBackground]}
          imageStyle={Styles.backgroungImage}
        >
          <LinearGradient
            colors={[Colors.transparent, Colors.black]} 
            style={Styles.layerGradient}
          >
            {this.TemplateHeader()}
            <View>
              {this.TemplateClassInfo()}
              {this.TemplateLecturerInfo()}
            </View>
          </LinearGradient>
        </ImageBackground>
    )
  }
}


const Styles = StyleSheet.create({
  backgroungImage: {
    height: 350,
    width: '100%',
    borderRadius: 10
  },
  layerGradient: {
    height: '100%',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  classInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  classDuration: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelClassDuration: {
    color: '#fff',
    marginLeft: 5
  },
  watchIcon: {
    height: 16,
    width: 16
  },
  classInfoTwo: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
  },
  classCode: {
    color: Colors.white,
    fontSize: 13,
    fontWeight: 'bold',
  },
  className: {
    color: Colors.white,
    fontSize: 20,
    marginTop: 12,
    marginBottom: 15
  },
  lecturerInfoWrapper: {
    width: '100%',
    flexDirection: 'row',
    paddingTop: 5
  },
  lecturerImage: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },
  lecturerName: {
    color: Colors.white,
    marginLeft: 10
  }
})

export default OnGoingClass;