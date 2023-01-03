import { API_HOST } from './index';

const getAuthenticateEndpoint = () => `${API_HOST}/authenticate`;
export const getAuthenticationRequest = (accountDetails) => [
  getAuthenticateEndpoint()
  // getHttpPostOptions(accountDetails)
  //TODO use something like src/containers/auth/Auth.container.tsx in BSM

  // Documentation - Modules .d.ts

  // look at organiser ui for reference
  // need understanding of build/src/tools/api/api.types.d.ts

  //read up on some basic login in screen docs/videos
];
