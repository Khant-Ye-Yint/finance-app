'use client';
import { useMemo } from 'react';
import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';

const Trend = ({ type, amount, prevAmount }) => {
  const colorClasses = {
    Income: 'text-green-700 dark:text-green-300',
    Outcome: 'text-red-700 dark:text-red-300',
    Investment: 'text-indigo-700 dark:text-indigo-300',
    Savings: 'text-yellow-700 dark:text-yellow-300',
  };

  const calcPrecentageChange = (amount, prevAmount) => {
    if (!prevAmount || !amount) return 0;
    return ((amount - prevAmount) / prevAmount) * 100;
  };

  const percentageChange = useMemo(
    () => calcPrecentageChange(amount, prevAmount),
    [amount, prevAmount]
  );

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
      <div className="flex items-center space-x-1 text-sm ">
        <div>
          {percentageChange <= 0 ? <ArrowDownLeft /> : <ArrowUpRight />}
        </div>
        {percentageChange}% vs last period
      </div>
    </div>
  );
};

export default Trend;
