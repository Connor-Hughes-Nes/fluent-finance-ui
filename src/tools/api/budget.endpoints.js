import { API_HOST } from './index';
import { getHttpGetOptions } from '@neslotech/utils';

const getBudgetEndpoint = () => `${API_HOST}/budget`;
export const getLoadOrganisationRequest = (payload) => [
  getBudgetEndpoint(),
  getHttpGetOptions(payload())
];