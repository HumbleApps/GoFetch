import { all } from 'redux-saga/effects';

import authSaga from './authSaga';
import notificationSaga from './notificationSaga';

export default function* rootSaga() {
  yield all([
    authSaga(),
    notificationSaga(),
  ]);
}
