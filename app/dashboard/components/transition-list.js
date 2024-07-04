'use client';

import Button from '@/components/button';
import Seperator from '@/components/seperator';
import TransitionItem from '@/components/transitionItem';
import TransitionSummaryItem from '@/components/transitionSummaryItem';
import { fetchTransitions } from '@/lib/actions';
import { groupAndSumTransitionByDate } from '@/lib/utils';
import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';

const TransitionList = ({ initialTransitions, range }) => {
  const [transitions, setTransitions] = useState(initialTransitions);
  const [loading, setLoading] = useState(false);
  const [buttonHidden, setButtonHidden] = useState(
    initialTransitions.length === 0
  );
  const groupedTransitions = groupAndSumTransitionByDate(transitions);

  const loadMore = async () => {
    setLoading(true);
    let nextTransitions = null;
    try {
      nextTransitions = await fetchTransitions(range, transitions.length, 10);
      setButtonHidden(nextTransitions.length === 0);
      setTransitions((prevTransitions) => [
        ...prevTransitions,
        ...nextTransitions,
      ]);
    } finally {
      setLoading(false);
    }
  };

  const onRemove = (id) => () => {
    setTransitions((prev) =>
      [...prev].filter((transition) => transition.id !== id)
    );
  };

  return (
    <section className="space-y-8 ">
      {Object.entries(groupedTransitions).map(
        ([date, { transitions, amount }]) => (
          <div key={date}>
            <TransitionSummaryItem date={date} amount={amount} />
            <Seperator />
            <section className="space-y-4">
              {transitions.map((transition) => (
                <div key={transition.id}>
                  <TransitionItem
                    {...transition}
                    onRemove={onRemove(transition.id)}
                  />
                </div>
              ))}
            </section>
          </div>
        )
      )}
      {transitions.length === 0 && (
        <div className="text-center text-gray-400 dark:text-gray-500 ">
          No Transactions Found
        </div>
      )}
      {!buttonHidden && (
        <div className="flex justify-center">
          <Button varient="ghost" onClick={loadMore} disabled={loading}>
            {loading ? <LoaderCircle className=" animate-spin" /> : 'Load more'}
          </Button>
        </div>
      )}
    </section>
  );
};

export default TransitionList;
