import { ICBRCurrencyRateResponse } from 'api/currencyRate';

import { ICurrencyRate } from './types';

const transformObjectKeysToLowercase = <T>(object: {
  [key: string]: number;
}) => {
  return Object.keys(object).reduce(
    (result, key) => {
      result[key.toLowerCase()] = object[key];
      return result;
    },
    {} as { [key: string]: number }
  ) as T;
};

export const mapCurrencyRate = ({
  timestamp,
  rates,
}: ICBRCurrencyRateResponse): ICurrencyRate => {
  return {
    timestamp,
    rates: transformObjectKeysToLowercase(rates),
  };
};
