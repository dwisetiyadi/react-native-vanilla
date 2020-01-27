/**
 * @author: dwi.setiyadi@gmail.com
*/

import { AsyncStorage } from 'react-native';
import createEncryptor from 'redux-persist-transform-encrypt';
import { createBlacklistFilter } from 'redux-persist-transform-filter';

const encryptor = createEncryptor({
  secretKey: 'abang-baso-jangan-kasih-tau-sipa-siapa-ya',
  // onError(error) {
  //   console.log('createEncryptor error ', error);
  // },
});

const saveAuthSubsetBlacklistFilter = createBlacklistFilter(
  'auth',
  ['data' , 'action'],
);

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.0',
  storeConfig: {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['auth', 'notification'],
    transforms: [saveAuthSubsetBlacklistFilter, encryptor],
  },
};

export default REDUX_PERSIST;
