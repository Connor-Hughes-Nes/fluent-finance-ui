import { getHttpPostOptions,  } from '@neslotech/utils';

// getHttpPutOptions
// getHttpGetOptions

import { API_HOST } from './index';

const getAuthenticateEndpoint = () => `${API_HOST}/authenticate`;
export const getAuthenticationRequest = (accountDetails) => [
  getAuthenticateEndpoint(),
  getHttpPostOptions(accountDetails)
  //TODO use something like src/containers/auth/Auth.container.tsx in BSM

  // look at organiser ui for reference

  //read up on some basic login in screen docs/videos
];
