import { Suspense } from 'react';
import TransitionList from '@/app/dashboard/components/transition-list';
import TransitionListFallback from '@/app/dashboard/components/transition-list-fallback';
import Trend from './components/trend';
import TrendFallBack from './components/trend-fallback';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { varients, sizes } from '@/lib/variants';
import { createClient } from '@/lib/supabase/server';

export const metadata = {
  title: 'Dashboard',
};

const DashboardPage = async () => {
  const client = createClient();
  const { data, error } = await client.from('transactions').select();
  console.log(data);
  console.log(error);

  return (
    <>
      <section className="mb-8 ">
        <h1 className="text-4xl font-semibold ">Summary</h1>
      </section>
      <section className="grid grid-cols-2 gap-8 mb-8 md:grid-cols-4">
        <Suspense fallback={<TrendFallBack />}>
          <Trend type="Income" />
        </Suspense>
        <Suspense fallback={<TrendFallBack />}>
          <Trend type="Expense" />
        </Suspense>
        <Suspense fallback={<TrendFallBack />}>
          <Trend type="Savings" />
        </Suspense>
        <Suspense fallback={<TrendFallBack />}>
          <Trend type="Investment" />
        </Suspense>
      </section>
      <section className="flex items-center justify-between mb-8">
        <h2 className="text-2xl">Transactions</h2>
        <Link
          href="dashboard/transaction/add"
          className={` flex items-center space-x-1 ${varients['outline']} ${sizes['sm']}`}
        >
          <PlusCircle className="w-4 h-4 " />
          <div>Add</div>
        </Link>
      </section>
      <Suspense fallback={<TransitionListFallback />}>
        <TransitionList />
      </Suspense>
    </>
  );
};

export default DashboardPage;
