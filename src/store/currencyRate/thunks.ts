import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCBRCurrencyRate } from 'api/currencyRate';

import { mapCurrencyRate } from './mappers';

export const fetchCurrencyRate = createAsyncThunk(
  'currencyRate/fetchCurrencyRate',
  async () => {
    try {
      const { data } = await getCBRCurrencyRate();

      return mapCurrencyRate(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);

      return null;
    }
  }
);
