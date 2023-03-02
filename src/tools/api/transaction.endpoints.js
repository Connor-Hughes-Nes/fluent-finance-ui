import { API_HOST } from './index';
import { getHttpGetOptions, getHttpPostOptions } from '@neslotech/utils';

const getTransactionsEndpoint = (id) => `${API_HOST}/transaction/${id}`; //
export const getLoadTransactionRequest = (id) => [
  getTransactionsEndpoint(id),
  getHttpGetOptions() //??
];

const getTransactionEndpoint = () => `${API_HOST}/transaction`; //s
export const getUpdateTransactionRequest = (id, payload) => [
  getTransactionEndpoint(id),
  getHttpPostOptions(payload)
];