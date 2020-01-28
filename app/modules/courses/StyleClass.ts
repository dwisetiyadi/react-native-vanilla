import { StyleSheet } from 'react-native';
import Styles from '../../styles';
import { Dimensions } from 'react-native';

export default StyleSheet.create({
  container: {
    ...Styles.Main.container,
    justifyContent: 'space-between',
  },
  classTopContainer: {
    flex: 1,
  },
  classContainer: {
    flexGrow: 1,
  },
  textMyClass: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Styles.Colors.white,
    marginLeft: 21,
    marginTop: 15,
    marginBottom: 13,
  },
  listContainer: {
    paddingTop: 23,
    marginLeft: 15,
    marginRight: 15,
  },
  listItemContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginHorizontal: 1,
    marginBottom: 15,
    elevation: 2,
    backgroundColor: Styles.Colors.white,
    borderRadius: 7,
  },
  listItemImage: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginVertical: 12,
    marginLeft: 8,
    marginRight: 20,
  },
  listItemTitle: {
    fontSize: 16,
    color: Styles.Colors.black,
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  nameInput: {
    marginBottom: 20,
  },
  addButton: {
    alignSelf: 'center',
    marginBottom: 62,
  },
  buttonsContainer: {
    marginBottom: 48,
    alignItems: 'center',
  },
  containerLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  loading: {
    width: 40,
    height: 40,
  },
  viewSession: {
    backgroundColor: '#f65161',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    width: 100,
    height: 45,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 15,
  },
  listItemSession: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Styles.Colors.white,
  },
  listItemId: {
    flex: 1,
    marginLeft: 15,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: Styles.Colors.black,
  },
  listItemClass: {
    flex: 1,
    marginLeft: 15,
    marginBottom: 7,
    fontSize: 21,
    color: Styles.Colors.black,
  },
  viewLecturer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 15,
  },
  viewLecturerPhoto: {
    width: 45,
    height: 45,
    borderRadius: 30,
    marginRight: 10,
    marginLeft: 15,
  },
  listItemLecturer: {
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 16,
    color: Styles.Colors.black,
  },
  viewRoom: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  viewTime: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
  },
  viewIconBorder: {
    width: 20,
    height: 20,
    borderRadius: 30,
    marginRight: 10,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemRoom: {
    flex: 1,
    textAlignVertical: 'center',
    fontSize: 15,
    color: Styles.Colors.black,
  },
  viewTimeName: {
    flex: 1,
    justifyContent: 'center',
  },
  listItemTime: {
    fontSize: 15,
    color: Styles.Colors.black,
  },
  viewIcon: {
    width: 15,
    height: 15,
    justifyContent: 'center',
  },
  viewProgress: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  viewProgressText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listProgress: {
    fontSize: 12,
    color: Styles.Colors.black,
    marginLeft: 15,
    marginBottom: 8,
  },
  listProgressPercent: {
    fontSize: 13,
    fontWeight: 'bold',
    alignItems: 'flex-end',
    color: Styles.Colors.black,
    marginRight: 15,
    marginBottom: 8,
  },
  listProgressBar: {
    flex: 1,
    backgroundColor: '#d8d8d8',
    height: 4,
    position: 'relative',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
  },
  listProgressBarFilled: {
    flex: 1,
    backgroundColor: '#f18601',
    height: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 21,
    marginBottom: 5,
  },
  buttonActive: {
    fontSize: 22,
    color: Styles.Colors.white,
    marginRight: 30,
  },
  buttonDisabled: {
    fontSize: 22,
    color: '#ba88be',
    marginRight: 30,
  },
  viewRoomTime: {
    flex: 1,
    width: '100%',
  },
  linearGradient: {
    flex: 1,
  },
  headerClass: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
  },
});
