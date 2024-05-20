import { ICBRCurrencyRateResponse } from 'api/currencyRate';

import { ICurrencyRateData } from './types';

export const mapCurrencyRate = ({
  date,
  rates,
}: ICBRCurrencyRateResponse): ICurrencyRateData => {
  const newRates = { ...rates, RUB: 1 };

  return {
    dateOfUpdate: date,
    rates: newRates,
  };
};
