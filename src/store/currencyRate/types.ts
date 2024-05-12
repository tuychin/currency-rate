import { Currency } from 'types';

export interface ICurrencyRate {
  timestamp: string;
  rates: {
    [key in Currency]: number;
  };
}
