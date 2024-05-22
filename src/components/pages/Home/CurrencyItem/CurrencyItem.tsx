import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import CurrencyFlag from 'react-currency-flags';

import { TCurrency } from 'types';

interface ICurrencyItemProps {
  currency: TCurrency;
  currencyAmount: string;
  currencySymbol: string;
  onCurrencySelect: () => void;
}

export const CurrencyItem: FC<ICurrencyItemProps> = ({
  currency,
  currencyAmount,
  currencySymbol,
  onCurrencySelect,
}) => {
  return (
    <Paper elevation={3}>
      <Button
        color="inherit"
        onClick={onCurrencySelect}
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          gap: 1,
          width: '100%',
          padding: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          {currency}
          <CurrencyFlag currency={currency} width={20} />
        </Typography>
        <Typography variant="body1">
          {currencyAmount} {currencySymbol}
        </Typography>
      </Button>
    </Paper>
  );
};
