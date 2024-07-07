'use client';

import { useEffect, useRef, useState } from 'react';
import { Heart, Zap, UsersRound } from 'lucide-react';
import { Rubik } from 'next/font/google';
import { useInView } from 'framer-motion';
import AnimatedNumbers from 'react-animated-numbers';

const rubik = Rubik({ subsets: ['latin'] });

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const [transactions, setTransactions] = useState(0);
  const [users, setUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTransactions(4.5);
      setUsers(4200);
      setTotalUsers(400);
    } else {
      setTransactions(0);
      setUsers(0);
      setTotalUsers(0);
    }
  }, [isInView]);

  return (
    <section className="flex flex-col items-center justify-center max-w-4xl py-16 mx-auto space-y-20">
      <h1
        className={`${rubik.className} font-bold md:text-center text-6xl md:text-7xl md:leading-[80px]`}
      >
        We are here for you every step of the way
      </h1>
      <div
        ref={ref}
        className="px-8 py-4 bg-black shadow md:px-16 md:py-8 dark:bg-slate-100 stats stats-vertical lg:stats-horizontal"
      >
        <div className="stat">
          <div className="text-green-500 stat-figure">
            <Zap size={32} />
          </div>
          <div className="stat-title dark:text-slate-700">
            Total Transactions
          </div>
          <div className="flex stat-value text-7xl dark:text-black">
            <AnimatedNumbers
              transitions={(index) => ({
                type: 'spring',
                duration: index + 0.3,
              })}
              animateToNumber={transactions}
            />
            <span>M+</span>
          </div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary">
            <Heart size={32} />
          </div>
          <div className="stat-title dark:text-slate-700">New Users</div>
          <div className="stat-value text-7xl dark:text-black">
            <AnimatedNumbers
              transitions={(index) => ({
                type: 'spring',
                duration: index + 0.3,
              })}
              includeComma
              animateToNumber={users}
            />
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-primary">
            <UsersRound size={32} />
          </div>
          <div className="stat-title dark:text-slate-700">Total Users</div>
          <div className="flex stat-value text-7xl dark:text-black">
            <AnimatedNumbers
              transitions={(index) => ({
                type: 'spring',
                duration: index + 0.3,
              })}
              animateToNumber={totalUsers}
            />
            <span>K+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
