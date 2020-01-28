import {
  call, put, takeLatest, all, select
} from 'redux-saga/effects';
import { get } from '../../utilities/StoreApi';
import {
  APICLASSTODAY, APICLASS, CLASSLISTFETCH,
} from './ConfigClass';
import {
  classListFailed,
  classListSuccess,
  classListTotal,
} from './ActionClass';
import {
  IworkerSagaClassListParams,
} from './interfaces/sagas';

function* workerSagaClassList(params: IworkerSagaClassListParams): void {
  try {
    const isToday: boolean = params.dataList.filter;
    let API: string;

    if(isToday) {
      API = APICLASSTODAY;
    } else {
      API = APICLASS;
    }
    
    const response: any = yield call(get, API, params.dataList);
    const res: any = response.data.data;

    if (response.status === 200 && res.length > 0) {
      yield put(classListTotal(res.total));
      yield put(classListSuccess(res));
    }

  } catch (error) {
    yield put(classListFailed(error.message));
  }
}

export const watcherClass = [
  takeLatest(CLASSLISTFETCH, workerSagaClassList),
];
