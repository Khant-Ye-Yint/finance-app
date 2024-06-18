const Trend = ({ type, amount, prevAmount }) => {
  const colorClasses = {
    Income: 'text-green-700 dark:text-green-300',
    Outcome: 'text-red-700 dark:text-red-300',
    Investment: 'text-indigo-700 dark:text-indigo-300',
    Savings: 'text-yellow-700 dark:text-yellow-300',
  };

  const calcPrecentChange = (amount, prevAmount) => {
    if (prevAmount === 0) return 0;
    return ((amount - prevAmount) / prevAmount) * 100;
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat('mm', {
      style: 'currency',
      currency: 'MMK',
    }).format(amount);

  return (
    <div>
      <div className={`font-semibold ${colorClasses[type]}`}>{type}</div>
      <div className="mb-2 text-2xl font-semibold text-black dark:text-white">
        {amount ? formatCurrency(amount) : formatCurrency(0)}
      </div>
    </div>
  );
};

export default Trend;
