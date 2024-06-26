import TransactionForm from '../../components/transaction-form';

export const metadata = {
  title: 'Add Transaction',
};

const Page = () => {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-semibold ">Add Transaction</h1>
      <TransactionForm />
    </div>
  );
};

export default Page;
