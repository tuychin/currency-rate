import { TCurrencyRate } from 'store';
import { TCurrency } from 'types';

/**
 * Конвертирует список валют относительно выбранной валюты и её суммы
 *
 * @param amount Сумма выбранной валюты
 * @param currency Выбранная валюта
 * @param currencyRate Список всех валют
 *
 * @returns Курс валют относительно выбранной валюты и её суммы
 */
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

    const value =
      Number.isNaN(amount) || amount < 0
        ? 0
        : (amount * currencyRate[key]) / currencyRate[currency];
    const roundedValue = Number(value.toFixed(2));
    result[key] = roundedValue || value;
  });

  return result;
};
