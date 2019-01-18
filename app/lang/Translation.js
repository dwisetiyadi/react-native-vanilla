/**
 * @author: dwi.setiyadi@gmail.com
*/

import TranslatorAuth from '../modules/auth/TranslatorAuth';
import TranslatorUsers from '../modules/users/TranslatorUsers';

export const Availability = [
  'id',
  'en',
];

const GlobalTranslator = [
  {
    id: 'Anda yakin ingin keluar aplikasi?',
    en: 'Are you sure want to close this app?',
  },
  {
    id: 'Ya',
    en: 'Yes',
  },
  {
    id: 'Tidak',
    en: 'No',
  },
  {
    id: 'Tambah',
    en: 'Add',
  },
  {
    id: 'Ubah',
    en: 'Update',
  },
  {
    id: 'Hapus',
    en: 'Delete',
  },
  {
    id: 'Berhasil',
    en: 'Success',
  },
  {
    id: 'Lanjut',
    en: 'Continue',
  },
  {
    id: 'Lihat',
    en: 'View',
  },
];

export const Locale = [
  ...GlobalTranslator,
  ...TranslatorAuth,
  ...TranslatorUsers,
];
