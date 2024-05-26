import { ChangeEvent } from 'react';

import { cbrCurrencyRateMock } from '__testing__/mocks';
import { act, renderHook } from '__testing__/unit';

import { useConverter } from './useConverter';

const initialState = {
  currencyRate: { data: cbrCurrencyRateMock, isLoading: false },
};

describe('Конвертация', () => {
  test('Ожидается правильная конвертация валюты', () => {
    const { result } = renderHook(useConverter, initialState);

    act(() => {
      result.current.onCurrencySelect('RUB');
      result.current.onAmountChange({
        target: { value: '300' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.currencyRate.USD).toBe(3.32);
    expect(result.current.currencyRate.EUR).toBe(3.07);
    expect(result.current.currencyRate.CNY).toBe(24.14);
  });

  test('Ожидается ноль при вводе 0', () => {
    const { result } = renderHook(useConverter, initialState);

    act(() => {
      result.current.onCurrencySelect('RUB');
      result.current.onAmountChange({
        target: { value: '0' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.currencyRate.USD).toBe(0);
  });
  test('Ожидается ноль при вводе отрицательного числа', () => {
    const { result } = renderHook(useConverter, initialState);

    act(() => {
      result.current.onCurrencySelect('RUB');
      result.current.onAmountChange({
        target: { value: '-1' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.currencyRate.USD).toBe(0);
  });
  test('Ожидается ноль при вводе букв', () => {
    const { result } = renderHook(useConverter, initialState);

    act(() => {
      result.current.onCurrencySelect('RUB');
      result.current.onAmountChange({
        target: { value: 'test' },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.currencyRate.USD).toBe(0);
  });
});
