import { AxiosResponse, api } from '../config';
import { ICBRCurrencyRateResponse } from './types';

export const getCBRCurrencyRate = (): Promise<
  AxiosResponse<ICBRCurrencyRateResponse>
> => {
  return api.get(`https://www.cbr-xml-daily.ru/latest.js`);
};
