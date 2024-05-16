import { TCurrencyRate } from 'store';
import { TCurrency } from 'types';

export const convertCurrencyRate = (
  amount: number,
  currency: TCurrency,
  currencyRate: TCurrencyRate
) => {
  const result = { ...currencyRate };
  const currencyRateKeys = Object.keys(currencyRate) as TCurrency[];

  currencyRateKeys.forEach((key) => {
    if (key === currency) {
      delete result[currency];
      return;
    }

    result[key] = (amount * currencyRate[key]) / currencyRate[currency];
  });

  return result;
};
