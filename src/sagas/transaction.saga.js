// Redux-Saga is a middleware library used to allow a Redux store to asynchronously interact
// with resources outside of itself. Redux-Saga helps in: making HTTP requests. accessing browser storage.
// executing I/O operations.

import axios, { all } from 'axios';
import { call, put, takeLatest } from '@redux-saga/core/effects';

import { addSystemNotice } from '../actions/system.actions';

import {
  LOAD_TRANSACTION,
  SET_TRANSACTION
} from '../actions/transaction.actions';

import { getLoadTransactionRequest } from '../tools/api/transaction.endpoints';

// TODO: how this loads but sets as the put action
export function* performLoadTransaction({ id }) {
  try {
    // get endpoint and http request options
    const [endpoint, requestOptions] = getLoadTransactionRequest(id);

    // make the request, no need to check the response
    const { data } = yield call(axios, endpoint, requestOptions);

    yield put({ type: SET_TRANSACTION, classes: data });
  } catch ({ response }) {
    yield put(addSystemNotice(response.data.error));
  }
}

export function* watchForLoadTransactionRequest() {
  yield takeLatest(LOAD_TRANSACTION, performLoadTransaction);
}

export default function* TransactionSaga() {
  yield all([
    watchForLoadTransactionRequest
  ]);
}