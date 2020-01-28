/**
 * @author: dwi.setiyadi@gmail.com
*/


import LocaleGlobal from '../lang/LocaleGlobal';
import LocaleBinusAuth from '../modules/auth_binus/LocaleAuth';
import LocaleHome from '../modules/home/LocaleHome';
import LocaleClass from '../modules/courses/LocaleClass';

export const Locale = [
  ...LocaleGlobal,
  ...LocaleBinusAuth,
  ...LocaleHome,
  ...LocaleClass,
];

export const Availability = [
  'id',
  'en',
];
