import { SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { TLanguage, getLanguage, setLanguage } from 'i18n';
import { FC, useState } from 'react';

import { useTranslation } from '../i18n';

export const LanguageSelector: FC = () => {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] =
    useState<TLanguage>(getLanguage());

  const onLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as TLanguage);
    setSelectedLanguage(event.target.value as TLanguage);
  };

  return (
    <FormControl sx={{ width: 'fit-content' }}>
      <InputLabel id="language-selector">{t('language')}</InputLabel>
      <Select
        labelId="language-selector"
        value={selectedLanguage}
        label={t('language')}
        onChange={onLanguageChange}
      >
        <MenuItem value="ru">{t('ru')}</MenuItem>
        <MenuItem value="en">{t('en')}</MenuItem>
      </Select>
    </FormControl>
  );
};
