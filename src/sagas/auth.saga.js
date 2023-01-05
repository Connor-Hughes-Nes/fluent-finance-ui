import axios from 'axios';

import { call, put, takeLatest } from '@redux-saga/core/effects';

import {
  AUTHENTICATE
} from '../actions/auth.actions';

import {
  getAuthenticationRequest,
} from '../tools/api/auth.endpoints'
import { setAuthTokenCookie } from '../tools/auth.utils';
import { addSystemNotice } from '../actions/system.actions';

// authentication vs authorization

export function* performAuthentication({ credentials, navigate, onComplete }) {
  try {
    // get endpoint and http request options
    const [endpoint, requestOptions] = getAuthenticationRequest(credentials);

    // make the request, no need to check the response
    const { data } = yield call(axios, endpoint, requestOptions);

    const { auth_token } = data;
    yield call(setAuthTokenCookie, auth_token);

    // navigate to organisation switch page
    yield call(navigate, '/organisation-selection');
  } catch (error) {
    yield put(addSystemNotice('The email address or password is incorrect.'));
  } finally {
    yield call(onComplete);
  }
}

export function* watchForAuthRequest() {
  yield takeLatest(AUTHENTICATE, performAuthentication);
}

export default function* authSaga() {
  yield ([ //all
    watchForAuthRequest()
  ]);
}

