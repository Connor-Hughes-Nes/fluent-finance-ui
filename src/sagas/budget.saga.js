import axios, { all } from 'axios';
import { call, put, takeLatest } from '@redux-saga/core/effects';

import { addSystemNotice } from '../actions/system.actions';

import { getLoadBudgetRequest } from '../tools/api/budget.endpoints';

// side effects
// manages processes that need to be executed in a transactional way,
  // maintaining the state of the execution and compensating for failed processes
//is implemented as a middleware because we can’t use a reducer, which must be a pure function,
// to coordinate and trigger asynchronous actions (side effects).
//handle multiple async requests

import {
  LOAD_BUDGET,
  SET_BUDGET,
} from '../actions/budget.actions';

// TODO: how this loads but sets as the put action
export function* performLoadBudget({ id }) {
  try {
    // get endpoint and http request options
    const [endpoint, requestOptions] = getLoadBudgetRequest(id);

    // make the request, no need to check the response
    const { data } = yield call(axios, endpoint, requestOptions);

    yield put({ type: SET_BUDGET, classes: data });
  } catch ({ response }) {
    yield put(addSystemNotice(response.data.error));
  }
}

export function* watchForLoadBudgetRequest() {
  yield takeLatest(LOAD_BUDGET, performLoadBudget);
}

export default function* eventSaga() {
  yield all([
    watchForLoadBudgetRequest
  ]);
}