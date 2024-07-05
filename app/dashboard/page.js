import { Suspense } from 'react';
import TransitionListWrapper from './components/transition-list-wrapper';
import TransitionListFallback from '@/app/dashboard/components/transition-list-fallback';
import Trend from './components/trend';
import TrendFallBack from './components/trend-fallback';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { varients, sizes } from '@/lib/variants';
import { ErrorBoundary } from 'react-error-boundary';
import { types } from '@/lib/consts';
import Range from './components/range';

import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'Dashboard',
};

const DashboardPage = async ({ searchParams }) => {
  const range = searchParams?.range ?? 'last30days';
  return (
    <div className="py-8 space-y-8">
      <section className="flex items-center justify-between ">
        <h1 className={`${rubik.className} text-4xl font-semibold `}>
          Summary
        </h1>
        <aside>
          <Range />
        </aside>
      </section>
      <section className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {types.map((type) => (
          <ErrorBoundary
            fallback={
              <div className="text-red-500 ">
                Could not fetch {type} trend data.
              </div>
            }
            key={type}
          >
            <Suspense fallback={<TrendFallBack />}>
              <Trend type={type} range={range} />
            </Suspense>
          </ErrorBoundary>
        ))}
      </section>
      <section className="flex items-center justify-between">
        <h2 className={`text-2xl ${rubik.className}`}>Transactions</h2>
        <Link
          href="dashboard/transaction/add"
          className={` flex items-center space-x-1 ${varients['outline']} ${sizes['sm']}`}
        >
          <PlusCircle className="w-4 h-4 " />
          <div>Add</div>
        </Link>
      </section>
      <Suspense fallback={<TransitionListFallback />}>
        <TransitionListWrapper range={range} />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
