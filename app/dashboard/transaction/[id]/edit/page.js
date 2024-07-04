import TransactionForm from '@/app/dashboard/components/transaction-form';
import { createClient } from '@/lib/supabase/server';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Edit Transaction',
};

const EditPage = async ({ params: { id } }) => {
  const supabase = createClient();
  const { data: transaction, error } = await supabase
    .from('transactions')
    .select()
    .eq('id', id)
    .single();

  if (error) notFound();

  return (
    <>
      <h1 className="mb-8 text-4xl font-semibold ">Edit Transaction</h1>
      <TransactionForm initialData={transaction} />
    </>
  );
};

export default EditPage;
