import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from '../router';
import { useInit } from './hooks/useInit';

export const App: FC = () => {
  const { isLoading } = useInit();

  const renderLoading = () => {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100dvh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  };

  return isLoading ? renderLoading() : <RouterProvider router={router} />;
};
