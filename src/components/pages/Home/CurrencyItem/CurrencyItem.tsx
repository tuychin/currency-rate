import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
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
    <Paper
      onClick={onCurrencySelect}
      elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        padding: 2,
        cursor: 'pointer',
        transform: 'scale(1)',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        '&:active': {
          transform: 'scale(1)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {currency}
        <CurrencyFlag currency={currency} width={20} />
      </Box>
      <Box>
        {currencyAmount} {currencySymbol}
      </Box>
    </Paper>
  );
};
