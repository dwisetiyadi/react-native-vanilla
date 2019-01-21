/**
 * @author: dwi.setiyadi@gmail.com
*/


import LocaleGlobal from '../lang/Locale';
import LocaleAuth from '../modules/auth/LocaleAuth';
import LocaleUsers from '../modules/users/LocaleUsers';

export const Locale = [
  ...LocaleGlobal,
  ...LocaleAuth,
  ...LocaleUsers,
];

export const Availability = [
  'id',
  'en',
];
