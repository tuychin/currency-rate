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

    const value = Number.isNaN(amount)
      ? 0
      : (amount * currencyRate[key]) / currencyRate[currency];
    const roundedValue = Number(value.toFixed(2));
    result[key] = roundedValue || value;
  });

  return result;
};
