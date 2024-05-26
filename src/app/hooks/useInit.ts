import { useEffect } from 'react';

import { useDispatch, useSelector } from 'store';
import { fetchCurrencyRate } from 'store/currencyRate';

export const useInit = () => {
  const isLoading = useSelector((state) => state.currencyRate.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencyRate());
  }, [dispatch]);

  return {
    isLoading,
  };
};
