import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '../router';
import './App.css';
import { useInit } from './useInit';

export const App: FC = () => {
  const { isLoading } = useInit();

  return isLoading ? <div>Loading...</div> : <RouterProvider router={router} />;
};
