import { API_HOST } from './index';
import { getHttpGetOptions } from '@neslotech/utils';

const getTransactionEndpoint = () => `${API_HOST}/transaction`;
export const getLoadTransactionRequest = (payload) => [
  getTransactionEndpoint(),
  getHttpGetOptions(payload())
];