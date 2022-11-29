import { API_HOST } from './index';

const getAuthenticateEndpoint = () => `${API_HOST}/authenticate`;
export const getAuthenticationRequest = (credentials) => [
  getAuthenticateEndpoint(),
  // getHttpPostOptions(credentials)
  // use something like src/containers/auth/Auth.container.tsx in BSM

  // Documentation - Modules .d.ts

  // is getting auth options something that we have built?
  // look at organiser ui for reference
];