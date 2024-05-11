export interface ICurrencyRateResponse {
  [key: string]: {
    code: string;
    alphaCode: string;
    numericCode: string;
    name: string;
    rate: number;
    date: string;
    inverseRate: number;
  };
}
