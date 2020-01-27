import {AsyncStorage} from 'react-native';

export const setToken = (token: string, cb?: Function): void => {
  AsyncStorage.setItem('@valina-binus@token', token)
  .then(response => {
    cb(true);
  })
  .catch(err => {
    cb(false);
  })
}
export const getToken = (cb?: Function): any => {
  return AsyncStorage.getItem('@valina-binus@token')
        .then(response => {
          if(typeof cb == 'function') {
            cb(response);
          }
          return response;
        })
        .catch(err => {
          if(typeof cb == 'function') {
            cb(false);
          }
          return false;
        })
}
