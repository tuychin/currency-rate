import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import CurrencyFlag from 'react-currency-flags';

import { Layout } from 'components/common/Layout';
import { Menu } from 'components/common/Menu';
import { currencyData } from 'constants';
import { TCurrency } from 'types';

import { useTranslation } from './i18n';
import { useConverter } from './useConverter';

export const Home: FC = () => {
  const {
    selectedCurrency,
    amount,
    dateOfUpdate,
    currencyRate,
    onCurrencySelect,
    onAmountChange,
  } = useConverter();

  const { t } = useTranslation();

  return (
    <Layout menu={<Menu />}>
      <Typography variant="h6" gutterBottom>
        {t('date_of_update', { dateOfUpdate })}
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
      >
        {selectedCurrency}{' '}
        <CurrencyFlag currency={selectedCurrency} width={20} />
      </Typography>
      <TextField
        variant="standard"
        type="number"
        value={amount}
        onChange={(event) => onAmountChange(parseInt(event.target.value, 10))}
        sx={{ marginBottom: 2 }}
      />
      {currencyRate && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {Object.entries(currencyRate).map((currencyItem) => {
            const [currencyCode, value] = currencyItem as [TCurrency, number];

            return (
              <Paper
                onClick={() => onCurrencySelect(currencyCode as TCurrency)}
                role="presentation"
                elevation={3}
                key={currencyCode}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  padding: 2,
                  cursor: 'pointer',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {currencyCode}
                  <CurrencyFlag currency={currencyCode} width={20} />
                </Box>
                <Box>
                  {value.toLocaleString().replace(/,/g, ' ')}{' '}
                  {currencyData[currencyCode].symbol}
                </Box>
              </Paper>
            );
          })}
        </Box>
      )}
    </Layout>
  );
};
