import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC, ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
  menu: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children, menu }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100dvh',
        overflow: 'hidden',
        ...(isMobile && {
          flexDirection: 'column-reverse',
        }),
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
