import Box from '@mui/material/Box';
import { FC, ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
  menu: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children, menu }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100dvh',
        overflow: 'hidden',
      }}
    >
      <Box>{menu}</Box>
      <Box
        sx={{
          flexGrow: 2,
          overflow: 'auto',
          padding: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
