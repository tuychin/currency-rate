import { Currency } from 'types';

import { AxiosResponse, api } from '../config';
import { ICurrencyRateResponse } from './interfaces';

export const getCurrencyRate = (
  currency: Currency
): Promise<AxiosResponse<ICurrencyRateResponse>> => {
  return api.get(`https://www.floatrates.com/daily/${currency}.json`);
};
