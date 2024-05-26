import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { ChangeEvent, FC, KeyboardEvent } from 'react';

interface IAmountInputProps {
  amount: string;
  symbol: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const AmountInput: FC<IAmountInputProps> = ({
  amount,
  symbol,
  onChange,
}) => {
  const onInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    // Запрещаем ввод знаков + и -
    if (event.key === '-' || event.key === '+') {
      event.preventDefault();
    }
  };

  return (
    <TextField
      variant="outlined"
      type="number"
      value={amount}
      onChange={onChange}
      onKeyDown={onInputKeyDown}
      sx={{ marginBottom: 2 }}
      InputProps={{
        inputProps: {
          'data-testid': 'amount-input',
          min: 0,
        },
        endAdornment: <InputAdornment position="end">{symbol}</InputAdornment>,
      }}
    />
  );
};
