import { fetchTransitions } from '@/lib/actions';
import TransitionList from './transition-list';

const TransitionListWrapper = async ({ range }) => {
  const transitions = await fetchTransitions(range);

  return (
    <TransitionList
      initialTransitions={transitions}
      key={range}
      range={range}
    />
  );
};

export default TransitionListWrapper;
