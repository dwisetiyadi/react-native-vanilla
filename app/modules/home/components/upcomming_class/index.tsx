import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import _ from '../../../../lang';
import { IUpcommingClassProps } from '../../interfaces/components';
import LinearGradient from 'react-native-linear-gradient';
import watchGrayIcon from '../../../../assets/images/watch-gray.png';
import markerGrayIcon from '../../../../assets/images/marker-gray.png';
import rightArrowGrayIcon from '../../../../assets/images/right-arrow-gray.png';
import Styles from './StyleUpCommingClass';

const ProgressBar = ({styleBackground, styleFill}: any): JSX.Element => {
  return  <View style={[Styles.progressBar, styleBackground]}>
            <View style={[Styles.progressBarFilled, styleFill]}>
              
            </View>
          </View>
}

class UpCommingClass extends React.Component<IUpcommingClassProps, any> {
  /**
   *
   */
  constructor(props: IUpcommingClassProps) {
    super(props);
    this.TemplateClassInfo = this.TemplateClassInfo.bind(this);
    this.TemplateBody = this.TemplateBody.bind(this);
    this.TemplateTask = this.TemplateTask.bind(this);
  }

  TemplateClassInfo(): JSX.Element {
    const { data } = this.props;
    return  <View style={Styles.classInfo}>
              <View style={Styles.headerWrapper}>
                <LinearGradient 
                  colors={['#3A28B0', '#CB94D9']} 
                  start={{ x: 0, y: 0}} 
                  end={{ x: 1, y: 0}}
                  style={Styles.labelWrapper}
                >
                  <Text style={Styles.label}>{_('Upcomming Class')}</Text>
                </LinearGradient>
                <View style={Styles.duration}>
                  <Image 
                    source={watchGrayIcon}
                    style={Styles.watchIcon}
                  />
                  <Text style={Styles.durationLabel}>26m</Text>
                </View>
              </View>
              <Text style={Styles.classId}>{(data.class || {}).code}</Text>
              <Text style={Styles.className}>{(data.class || {}).name}</Text>
              <View style={Styles.lecturerInfoWrapper}>
                <Image 
                  source={{ uri: (data.lecturer || {}).image}}
                  style={Styles.lecturerImage}
                />
                <Text style={Styles.lecturerName}>{(data.lecturer || {}).name}</Text>
              </View>
            </View>
  }

  TemplateBody(): JSX.Element {
    const { data } = this.props;
    return  <View style={Styles.tasksWrapper}>
              <View style={Styles.tasksIconWrapper}>
                <Image
                  source={markerGrayIcon}
                  style={Styles.tasksIcon}
                />
                <Text style={Styles.tasksLabel}>{(data.class || {}).room}</Text>
              </View>
              <View style={Styles.tasksIconWrapper}>
                <Image
                  source={watchGrayIcon}
                  style={Styles.tasksIcon}
                />
                <Text style={Styles.tasksLabel}>{(data.class || {}).schedule}</Text>
              </View> 
              {this.TemplateTask()}
              <View style={Styles.classProgressBarWrapper}>
                <View style={Styles.classProgressLabelWrapper}>
                  <Text style={Styles.classProgressLabel}>{_('Class Progress')}</Text>
                  <Text style={Styles.classProgressLabel}>{data.progress}%</Text>
                </View>
                <ProgressBar 
                  styleFill={{
                    width: `${data.progress}%`
                  }}
                />
              </View>
            </View>
  }

  TemplateTask(): JSX.Element {
    const { data } = this.props;
    return  <LinearGradient 
              colors={['#F44F5F', '#AC3F4F']} 
              style={Styles.todoWrapper}
            >
              <View style={Styles.Wrapper}>
                <View style={Styles.todoHeaderWrapper}>
                  <Text style={Styles.todoHeaderText}>{_('Things to do in this week')}:</Text>
                </View>
                <TouchableOpacity style={Styles.arrowImageWrapper}>
                  <Image 
                    source={rightArrowGrayIcon}
                    style={Styles.arrowImage}
                  />
                </TouchableOpacity>
              </View>
              {
                (data.tasks || []).map((obj, index) => (
                  <View key={obj.id} style={Styles.taskItemWrapper}>
                    <Text style={Styles.taskItemTextBold}>
                      {index + 1}
                    </Text>
                    <Text style={Styles.taskItemText}>
                      {obj.name}
                    </Text>
                    <View 
                      style={Styles.dot}
                    />
                    <Text style={Styles.taskItemText}>
                      {obj.duration}
                    </Text>
                  </View>
                ))
              }
          </LinearGradient>
  }
  
  render() {
    return (
      <View style={Styles.container}>
        {this.TemplateClassInfo()}
        {this.TemplateBody()}
      </View>
    )
  }
}

export default UpCommingClass;