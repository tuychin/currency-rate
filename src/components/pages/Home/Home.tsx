import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import CurrencyFlag from 'react-currency-flags';

import { Layout } from 'components/common/Layout';
import { Menu } from 'components/common/Menu';
import { currencyData } from 'const';
import { TCurrency } from 'types';

import { CurrencyItem } from './CurrencyItem';
import { useConverter } from './hooks/useConverter';
import { useTranslation } from './i18n';

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
        variant="outlined"
        type="number"
        value={Number.isNaN(amount) ? '' : amount}
        onChange={onAmountChange}
        sx={{ marginBottom: 2 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {currencyData[selectedCurrency].symbol}
            </InputAdornment>
          ),
        }}
      />
      {currencyRate && (
        <Grid container spacing={2}>
          {Object.entries(currencyRate).map((currencyItem) => {
            const [currency, value] = currencyItem as [TCurrency, number];

            return (
              <Grid item xs={6} sm={6} md={3} lg={2} key={currency}>
                <CurrencyItem
                  currency={currency}
                  currencyAmount={value.toLocaleString().replace(/,/g, ' ')}
                  currencySymbol={currencyData[currency].symbol}
                  onCurrencySelect={() =>
                    onCurrencySelect(currency as TCurrency)
                  }
                />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Layout>
  );
};
