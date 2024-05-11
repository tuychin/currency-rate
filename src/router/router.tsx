import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Converter } from 'components/pages/Converter';
import { Home } from 'components/pages/Home';
import { Settings } from 'components/pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/converter',
    element: <Converter />,
  },
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);
