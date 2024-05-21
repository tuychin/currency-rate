import dayjs from 'dayjs';
import { ChangeEvent, useMemo, useState } from 'react';

import { TCurrencyRate, useSelector } from 'store';
import { TCurrency } from 'types';

import { convertCurrencyRate } from './convertCurrencyRate';

export const useConverter = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<TCurrency>('RUB');
  const [amount, setAmount] = useState<number>(1);
  const currencyRate = useSelector((state) => state.currencyRate.data);

  const convertedCurrencyRate: TCurrencyRate | null = useMemo(
    () =>
      currencyRate &&
      convertCurrencyRate(amount, selectedCurrency, currencyRate.rates),
    [amount, selectedCurrency, currencyRate]
  );

  const onCurrencySelect = (currency: TCurrency) => {
    setSelectedCurrency(currency);
  };

  const onAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setAmount(value);
  };

  return {
    selectedCurrency,
    amount,
    dateOfUpdate: dayjs(currencyRate?.dateOfUpdate).format('DD.MM.YYYY'),
    currencyRate: convertedCurrencyRate,
    onCurrencySelect,
    onAmountChange,
  };
};
