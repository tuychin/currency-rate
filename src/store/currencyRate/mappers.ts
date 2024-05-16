import { ICBRCurrencyRateResponse } from 'api/currencyRate';

import { ICurrencyRateData } from './types';

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
}: ICBRCurrencyRateResponse): ICurrencyRateData => {
  const newRates = { ...rates, RUB: 1 };

  return {
    timestamp,
    rates: transformObjectKeysToLowercase(newRates),
  };
};
