import { TCurrency } from 'types';

export type TCurrencyRate = Partial<{
  [key in TCurrency]: number;
}>;

export interface ICurrencyRateData {
  /** '2000-12-31' */
  dateOfUpdate: string;
  rates: TCurrencyRate;
}
