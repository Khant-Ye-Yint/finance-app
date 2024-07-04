import useFormatCurrency from '@/hooks/useFormatCurrency';

const TransitionSummaryItem = ({ date, amount }) => {
  const formattedAmount = useFormatCurrency(amount, 'mm', 'MMK');

  return (
    <div className="flex font-semibold text-gray-500 dark:text-gray-400">
      <div className=" grow">{date}</div>
      <div className=" min-w-[70px] text-right font-semibold">
        {formattedAmount}
      </div>
      <div className=" min-w-[100px]"></div>
    </div>
  );
};

export default TransitionSummaryItem;
