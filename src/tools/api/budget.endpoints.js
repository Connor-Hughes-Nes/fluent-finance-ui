import { API_HOST } from './index';
import { getHttpGetOptions } from '@neslotech/utils';

const getBudgetEndpoint = () => `${API_HOST}/budget`;
export const getLoadBudgetRequest = (payload) => [
  getBudgetEndpoint(),
  getHttpGetOptions(payload())
];