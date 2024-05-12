import { Navigate, createBrowserRouter } from 'react-router-dom';

import { Home } from 'components/pages/Home';
import { Settings } from 'components/pages/Settings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
