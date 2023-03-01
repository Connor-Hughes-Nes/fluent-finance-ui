// Redux-Saga is a middleware library used to allow a Redux store to asynchronously interact
// with resources outside of itself. Redux-Saga helps in: making HTTP requests. accessing browser storage.
// executing I/O operations.

import axios from 'axios';
import { all, call, put, takeLatest } from '@redux-saga/core/effects';

import { addSystemNotice } from '../actions/system.actions';
import { getLoadTransactionRequest, getUpdateTransactionRequest } from '../tools/api/transaction.endpoints';

import {
  LOAD_TRANSACTION,
  SET_TRANSACTION, UPDATE_TRANSACTION
} from '../actions/transaction.actions';


// TODO: how this loads but sets as the put action
export function* performLoadTransaction({ id }) {
  try {
    // get endpoint and http request options
    const [endpoint, requestOptions] = getLoadTransactionRequest(id);

    // make the request, no need to check the response
    const { data } = yield call(axios, endpoint, requestOptions);

    yield put({ type: SET_TRANSACTION, transaction: data });
  } catch ({ response }) {
    yield put(addSystemNotice(response.data.error));
  }
}

export function* watchForLoadTransactionRequest() {
  yield takeLatest(LOAD_TRANSACTION, performLoadTransaction);
}

export function* performUpdateTransaction({ id, payload, onSuccess }) {
  debugger;
  try {
    // get endpoint and http request options
    const [endpoint, requestOptions] = getUpdateTransactionRequest(id, payload);

    // make the request, no need to check the response
    const { data } = yield call(axios, endpoint, requestOptions);

    yield put({ type: SET_TRANSACTION, transaction: data });

    if (onSuccess) {
      yield call(onSuccess);
    }
  } catch ({ response }) {
    yield put(addSystemNotice(response.data.error, 'Error updating transaction'));
  }
}

export function* watchForUpdateTransactionRequest() {
  yield takeLatest(UPDATE_TRANSACTION, performUpdateTransaction);
}

export default function* TransactionSaga() {
  yield all([
    // watchForLoadTransactionRequest(),
    watchForUpdateTransactionRequest()
  ]);
}