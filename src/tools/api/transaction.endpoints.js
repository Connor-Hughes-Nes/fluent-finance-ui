import { API_HOST } from './index';
import { getHttpGetOptions, getHttpPutOptions } from '@neslotech/utils';


const getTransactionEndpoint = () => `${API_HOST}/transaction`;
export const getLoadTransactionRequest = (payload) => [
  getTransactionEndpoint(),
  getHttpGetOptions(payload())
];

export const getUpdateTransactionRequest = (id, payload) => [
  getTransactionEndpoint(id),
  getHttpPutOptions(payload)
];