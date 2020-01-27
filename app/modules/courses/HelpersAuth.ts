import { DUMMYUSERS } from './ConfigAuth';

interface IHelperLogin {
  success: Bolean;
  data: any;
  status: number;
  message: string
}

export const FakeLogin = ({user_name, password} : any): IHelperLogin => {
  let result = {
    success: false,
    data: null,
    status: 404,
    message: 'user not found'
  }
  let findUser = []
  findUser = DUMMYUSERS.filter(user => {
    return user.user_name === user_name && user.password === password
  })
  if(findUser.length > 0) {
    result.data = findUser[0];
    result.status = 200;
    result.success = true;
    result.message = 'Login berhasil';
  }

  return result;
}