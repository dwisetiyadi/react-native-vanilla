import { StyleSheet } from 'react-native';
import Colors from '../../../../styles/Colors';


export default StyleSheet.create({
  container: {
    width: '100%',
    // height: 500,
    borderRadius: 5,
    backgroundColor: Colors.white,
    marginTop: 15,
    padding: 15,
  },
  classInfo: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 0.5,
    paddingBottom: 10
  },
  headerWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelWrapper: {
    height: 35, 
    minWidth: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  label: {
    color: Colors.white,

  },
  duration: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  watchIcon: {
    height: 20,
    width: 20
  },
  durationLabel: {
    color: Colors.gray,
    marginLeft: 5
  },
  classId: {
    marginTop: 10,
    color: Colors.black,
    fontWeight: 'bold'
  },
  className: {
    marginTop: 10,
    color: Colors.black,
    fontSize:20
  },
  lecturerInfoWrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5
  },
  lecturerImage: {
    height: 35,
    width: 35,
    borderRadius: 35
  },
  lecturerName: {
    color: Colors.black,
    marginLeft: 5
  },
  tasksWrapper: {

  },
  tasksIconWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  tasksIcon: {
    height: 15,
    width: 15,
    borderRadius: 15,
    padding: 3,
    borderColor: Colors.gray,
    borderWidth: 0.3
  },
  tasksLabel: {
    color: Colors.black,
    marginLeft: 5
  },
  Wrapper: {
    position: 'relative',
    width: '100%'
  },
  todoWrapper: {
    width: '100%',
    minHeight: 200,
    borderRadius: 5,
    padding: 15,
    marginTop: 10,
  },
  todoHeaderWrapper: {
    borderBottomColor: Colors.white,
    borderBottomWidth: 0.5,
  },
  todoHeaderText: {
    color: Colors.white,
    marginBottom: 10,
    fontSize: 15,
  },
  arrowImageWrapper: {
    width: 35,
    height: 35,
    borderRadius: 35,
    backgroundColor: Colors.white,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: -17
  }, 
  arrowImage: {
    height: 20,
    width: 20
  },
  taskItemWrapper: {
    marginTop: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskItemText: {
    color: Colors.white,
    fontSize: 15,
  },
  taskItemTextBold: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 8
  },
  dot: {
    backgroundColor: Colors.white,
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: 15,
  },
  courseProgressBarWrapper: {
    width: '100%',
    paddingTop: 10
  },
  courseProgressLabelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  courseProgressLabel: {
    color: Colors.gray,
    fontSize: 12
  },
  progressBar: {
    backgroundColor: Colors.gray,
    width: '100%',
    height: 8,
    position: 'relative',
    marginTop: 5,
  },
  progressBarFilled: {
    backgroundColor: Colors.orange,
    height: '100%',
  }
})