import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Home } from 'components/pages/Home';
import { Settings } from 'components/pages/Settings';

export enum RouterPaths {
  HOME = '/',
  SETTINGS = '/settings',
}

export const router = createBrowserRouter([
  {
    path: RouterPaths.HOME,
    element: <Home />,
  },
  {
    path: RouterPaths.SETTINGS,
    element: <Settings />,
  },
  {
    path: '*',
    element: <Navigate to={RouterPaths.HOME} replace />,
  },
]);
