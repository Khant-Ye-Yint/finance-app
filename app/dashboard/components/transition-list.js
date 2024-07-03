import Seperator from '@/components/seperator';
import TransitionItem from '@/components/transitionItem';
import TransitionSummaryItem from '@/components/transitionSummaryItem';
import { createClient } from '@/lib/supabase/server';
import { groupAndSumTransitionByDate } from '@/lib/utils';

const TransitionList = async ({ range }) => {
  const supabase = createClient();
  const { data: transitions, error } = await supabase.rpc(
    'fetch_transactions',
    {
      // limit_arg,
      // offset_arg,
      range_arg: range,
    }
  );

  if (error) throw new Error("Couldn't fetch transactions.");

  const groupedTransitions = groupAndSumTransitionByDate(transitions);

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
                  <TransitionItem {...transition} />
                </div>
              ))}
            </section>
          </div>
        )
      )}
    </section>
  );
};

export default TransitionList;
