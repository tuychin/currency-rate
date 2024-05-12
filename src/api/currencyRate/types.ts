import { Currency } from 'types';

export interface ICBRCurrencyRateResponse {
  /** Example: '2024-05-09' */
  date: string;
  timestamp: string;
  base: keyof typeof Currency;
  rates: {
    [key in keyof typeof Currency]: number;
  };
}
