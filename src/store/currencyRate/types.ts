import { TCurrency } from 'types';

export type TCurrencyRate = {
  [key in TCurrency]: number;
};

export interface ICurrencyRateData {
  timestamp: string;
  rates: TCurrencyRate;
}
