/**
 * @author: dwi.setiyadi@gmail.com
*/


import LocaleGlobal from '../lang/LocaleGlobal';
import LocaleBinusAuth from '../modules/auth_binus/LocaleAuth';
import LocaleHome from '../modules/home/LocaleHome';

export const Locale = [
  ...LocaleGlobal,
  ...LocaleBinusAuth,
  ...LocaleHome,
];

export const Availability = [
  'id',
  'en',
];
