import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { RouterPaths } from 'router';

export const Menu: FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static" sx={{ width: 'fit-content', height: '100%' }}>
      <Toolbar
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          paddingY: 4,
        }}
      >
        <IconButton
          size="medium"
          color="inherit"
          aria-label="home"
          onClick={() => {
            navigate(RouterPaths.HOME);
          }}
        >
          <HomeIcon />
        </IconButton>
        <IconButton
          size="medium"
          color="inherit"
          aria-label="settings"
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
