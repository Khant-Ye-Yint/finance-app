import Seperator from '@/components/seperator';
import TransitionItem from '@/components/transitionItem';
import TransitionSummaryItem from '@/components/transitionSummaryItem';

const groupAndSumTransitionByDate = (transitions) => {
  const grouped = {};

  for (const transition of transitions) {
    const date = transition.created_at.split('T')[0];
    if (!grouped[date]) {
      grouped[date] = { transitions: [], amount: 0 };
    }
    grouped[date].transitions.push(transition);
    const amount =
      transition.type === 'Expense' ? -transition.amount : transition.amount;
    grouped[date].amount += amount;
  }

  return grouped;
};

const TransitionList = async () => {
  const response = await fetch(`${process.env.API_URL}/transactions`, {
    next: { tags: ['transaction-list'] },
  });
  const transitions = await response.json();

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
