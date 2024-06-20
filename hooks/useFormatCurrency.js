import { useMemo } from 'react';

const useFormatCurrency = (amount = 0, country, currency) => {
  const formatCurrency = (amount, country, currency) =>
    new Intl.NumberFormat(country, {
      style: 'currency',
      currency: currency,
    }).format(amount);

  return useMemo(
    () => formatCurrency(amount, country, currency),
    [amount, country, currency]
  );
};

export default useFormatCurrency;
