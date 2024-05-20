import { TCurrency } from 'types';

export interface ICBRCurrencyRateResponse {
  /** Example: '2024-05-09' */
  date: string;
  timestamp: string;
  base: TCurrency;
  rates: {
    [key in TCurrency]: number;
  };
}
