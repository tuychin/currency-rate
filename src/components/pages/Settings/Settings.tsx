import Box from '@mui/material/Box';
import { FC } from 'react';

import { Layout } from 'components/common/Layout';
import { Menu } from 'components/common/Menu';

import { LanguageSelector } from './LanguageSelector';
import { ThemeSwitcher } from './ThemeSwitcher';

export const Settings: FC = () => {
  return (
    <Layout menu={<Menu />}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <ThemeSwitcher />
        <LanguageSelector />
      </Box>
    </Layout>
  );
};
