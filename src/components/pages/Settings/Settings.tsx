import { SelectChangeEvent } from '@mui/material';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { TLanguage, getLanguage, setLanguage } from 'i18n';
import { FC, useState } from 'react';

import { Layout } from 'components/common/Layout';
import { Menu } from 'components/common/Menu';
import { useTheme } from 'theme';

import { useTranslation } from './i18n';

export const Settings: FC = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] =
    useState<TLanguage>(getLanguage());
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const onThemeChange = () => {
    setTheme?.(isDarkTheme ? 'light' : 'dark');
  };

  const onLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as TLanguage);
    setSelectedLanguage(event.target.value as TLanguage);
  };

  return (
    <Layout menu={<Menu />}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <FormControlLabel
          control={<Switch checked={isDarkTheme} onChange={onThemeChange} />}
          label={t('dark_theme')}
        />
        <FormControl sx={{ width: 'fit-content' }}>
          <InputLabel id="language-select">{t('language')}</InputLabel>
          <Select
            labelId="language-select"
            value={selectedLanguage}
            label={t('language')}
            onChange={onLanguageChange}
          >
            <MenuItem value="ru">{t('ru')}</MenuItem>
            <MenuItem value="en">{t('en')}</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Layout>
  );
};
