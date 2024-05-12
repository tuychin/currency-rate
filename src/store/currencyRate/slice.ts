import { createSlice } from '@reduxjs/toolkit';

import { fetchCurrencyRate } from './thunks';
import { ICurrencyRate } from './types';

interface CurrencyRateState {
  data: ICurrencyRate | null;
  isLoading: boolean;
}

const initialState: CurrencyRateState = {
  data: null,
  isLoading: false,
};

const currencyRateSlice = createSlice({
  name: 'currencyRate',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyRate.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCurrencyRate.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCurrencyRate.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const currencyRateReducer = currencyRateSlice.reducer;
