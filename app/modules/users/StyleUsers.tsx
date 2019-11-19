/**
 * @author: dwi.setiyadi@gmail.com
*/

import { StyleSheet } from 'react-native';
import Styles from '../../styles';

export default StyleSheet.create({
  container: {
    ...Styles.Main.container,
    justifyContent: 'space-between',
  },
  listContainer: {
    paddingTop: 23,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginBottom: 10,
    elevation: 2,
    backgroundColor: Styles.Colors.white,
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
});
