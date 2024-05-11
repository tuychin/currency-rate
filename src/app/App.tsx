import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '../router';
import './App.css';

export const App: FC = () => {
  return <RouterProvider router={router} />;
};
