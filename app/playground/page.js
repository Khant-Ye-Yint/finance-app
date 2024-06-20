import PageHeader from '@/components/page-header';
import Trend from '@/components/trend';
import TransitionItem from '@/components/transitionItem';

const PlayGroundPage = () => {
  return (
    <main className="space-y-8">
      <h1 className="mt-8 text-4xl">Playground</h1>
      <div>
        <h2 className="mb-4 font-mono text-lg ">Page Header</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="flex space-x-4 ">
          <PageHeader />
        </div>
      </div>
      <div>
        <h2 className="mb-4 font-mono text-lg ">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="flex space-x-4 ">
          <Trend type="Income" amount={1500} prevAmount={980} />
          <Trend type="Expense" amount={700} prevAmount={1000} />
          <Trend type="Investment" amount={500} prevAmount={200} />
          <Trend type="Savings" amount={300} prevAmount={500} />
        </div>
      </div>
      <div>
        <h2 className="mb-4 font-mono text-lg ">Trend</h2>
        <hr className="mb-4 border-gray-200 dark:border-gray-800 " />
        <div className="space-y-4 ">
          <TransitionItem
            type="Income"
            category=""
            description="salary"
            amount={2000}
          />
          <TransitionItem
            type="Expense"
            category="Food"
            description="Going out with friends"
            amount={100}
          />
          <TransitionItem
            type="Savings"
            description="For children"
            amount={500}
          />
          <TransitionItem
            type="Investment"
            description="stakeland"
            amount={9000}
          />
        </div>
      </div>
    </main>
  );
};

export default PlayGroundPage;
