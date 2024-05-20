import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { FC } from 'react';

import { useTheme } from 'theme';

import { useTranslation } from '../i18n';

export const ThemeSwitcher: FC = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const isDarkTheme = theme === 'dark';

  const onThemeChange = () => {
    setTheme?.(isDarkTheme ? 'light' : 'dark');
  };

  return (
    <FormControlLabel
      control={<Switch checked={isDarkTheme} onChange={onThemeChange} />}
      label={t('dark_theme')}
    />
  );
};
