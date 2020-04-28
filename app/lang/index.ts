/**
 * @author: dwi.setiyadi@gmail.com
*/

import { Locale } from '../config/Language';
import { lang } from '../config/Platform';

function translator(key: any, unique?: any): any {
  if (key == null) {
    return '';
  }

  let langMap;

  if (unique == null) {
    langMap = Locale.findIndex(find => find.id === key);
  } else {
    langMap = Locale.findIndex(find => find.id === key && find.key === unique);
  }

  if (langMap >= 0 && Locale[langMap][lang()] !== undefined) {
    return Locale[langMap][lang()];
  }

  return key;
}

export default translator;
