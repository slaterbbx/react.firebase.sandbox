import { takeLatest, all } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import * as userSagas from './user';

// USER

function* watchAuth() {
    yield takeLatest(actionTypes.AUTH_USER, userSagas.authSaga) // AUTH_USER comes from user action
}

export default function* rootSaga() {
    yield all([
      watchAuth()
    ])
  }