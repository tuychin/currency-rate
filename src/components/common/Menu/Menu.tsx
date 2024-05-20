import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { RouterPaths } from 'router';

export const Menu: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="default" sx={{ height: '100%' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          paddingY: 4,
          ...(isMobile && {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingY: 0,
          }),
        }}
      >
        <IconButton
          size="medium"
          color={location.pathname === RouterPaths.HOME ? 'primary' : 'inherit'}
          onClick={() => {
            navigate(RouterPaths.HOME);
          }}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          size="medium"
          color={
            location.pathname === RouterPaths.SETTINGS ? 'primary' : 'inherit'
          }
          onClick={() => {
            navigate(RouterPaths.SETTINGS);
          }}
        >
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
