import Button from '@/components/button';
import Link from 'next/link';
import { Mouse } from 'lucide-react';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

const Hero = () => {
  return (
    <section>
      <div className=" min-h-[80vh] flex flex-col justify-center items-start md:items-center space-y-10">
        <h1
          className={`${rubik.className} font-bold leading-[80px] items-start md:text-center text-7xl md:text-8xl`}
        >
          Take Control of Your Financial Destiny
        </h1>
        <p className="max-w-lg text-base text-start md:text-center">
          The Revolutionary Finance App That Tracks Your Income, Expenses,
          Investments, and Savings.
        </p>
        <Link href="/dashboard">
          <Button>Get Started</Button>
        </Link>
      </div>
      <div className="flex justify-center items-center min-h-[10vh] animate-bounce text-gray-500 dark:text-gray-400 ">
        <Mouse />
      </div>
    </section>
  );
};

export default Hero;
