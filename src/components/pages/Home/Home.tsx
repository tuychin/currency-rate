import { FC } from 'react';

import { Layout } from 'components/common/Layout';
import { Menu } from 'components/common/Menu';
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
      <div>{t('date_of_update', { dateOfUpdate })}</div>
      <br />
      <div>{selectedCurrency.toUpperCase()}</div>
      <input
        type="number"
        value={amount}
        onChange={(event) => onAmountChange(parseInt(event.target.value, 10))}
      />
      {currencyRate && (
        <div>
          <hr />
          {Object.entries(currencyRate).map(([currency, value]) => (
            <div
              onClick={() => onCurrencySelect(currency as TCurrency)}
              role="presentation"
              style={{ cursor: 'pointer' }}
              key={currency}
            >
              <div>{currency.toUpperCase()}</div>
              <div>{value.toLocaleString().replace(/,/g, ' ')}</div>
              <br />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};
