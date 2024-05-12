import { FC } from 'react';

import { Layout } from 'components/common/Layout';

import { useHome } from './useHome';

export const Home: FC = () => {
  const { currencyRate, isLoading } = useHome();

  return (
    <Layout>{isLoading ? 'LOADING' : JSON.stringify(currencyRate)}</Layout>
  );
};
