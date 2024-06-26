import BaseTrend from '@/components/trend';

const Trend = async ({ type }) => {
  const response = await fetch(`http://localhost:3100/trends/${type}`, {
    cache: 'no-store',
  });
  const { amount, prevAmount } = await response.json();

  return <BaseTrend type={type} amount={amount} prevAmount={prevAmount} />;
};

export default Trend;
