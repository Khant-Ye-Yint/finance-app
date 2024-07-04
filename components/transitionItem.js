import useFormatCurrency from '@/hooks/useFormatCurrency';
import { HandCoins, Landmark, PiggyBank, Wallet } from 'lucide-react';
import TransitionItemRemoveButton from './transition-item-remove-button';
import Link from 'next/link';
import { Pencil } from 'lucide-react';
import Button from './button';

const TransitionItem = ({
  id,
  type,
  category,
  description,
  amount,
  onRemove,
}) => {
  const formattedAmount = useFormatCurrency(amount, 'mm', 'MMK');

  const iconMap = {
    Income: {
      icon: HandCoins,
      colors: ' text-green-500 black:text-green-400',
    },

    Expense: {
      icon: Wallet,
      colors: ' text-red-500 black:text-red-400',
    },

    Savings: {
      icon: Landmark,
      colors: ' text-indigo-500 black:text-indigo-400',
    },

    Investment: {
      icon: PiggyBank,
      colors: ' text-yellow-500 black:text-yellow-400',
    },
  };

  const IconComponent = iconMap[type].icon;
  const colors = iconMap[type].colors;

  return (
    <div className="flex items-center w-full ">
      <div className="flex items-center grow">
        <IconComponent className={`${colors} mr-2 w-5 h-5 hidden sm:block`} />
        <span>{description}</span>
      </div>

      <div className=" min-w-[150px] items-center hidden md:flex">
        {category && (
          <div className="px-2 text-xs text-gray-100 bg-gray-900 rounded-md dark:bg-gray-100 dark:text-black py-0.5">
            {category}
          </div>
        )}
      </div>

      <div className=" min-w-[70px] text-right">{formattedAmount}</div>
      <div className=" min-w-[100px] flex justify-end items-center space-x-1 ">
        <Link href={`/dashboard/transaction/${id}/edit`}>
          <Button size="xs" varient="ghost" className="py-2">
            <Pencil size={16} />
          </Button>
        </Link>
        <TransitionItemRemoveButton id={id} onRemove={onRemove} />
      </div>
    </div>
  );
};

export default TransitionItem;
