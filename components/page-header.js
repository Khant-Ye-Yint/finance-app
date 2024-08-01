import Link from 'next/link';
import ToggleMode from './toggleMode';
import { Menu } from 'lucide-react';
import { createClient } from '@/lib/supabase/server';
import { sizes, varients } from '@/lib/variants';
import SignOutButton from '@/app/(auth)/components/sign-out-button';
import Avatar from './avatar';

const UserDropdown = async () => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <div className="flex flex-col items-center md:space-x-2 md:flex-row ">
      {user && (
        <Link
          href="/dashboard/settings"
          className={`${varients.ghost} ${sizes.sm} flex items-center space-x-1 py-2`}
        >
          <Avatar />
          <span>{user?.user_metadata?.fullName ?? user?.email}</span>
        </Link>
      )}
      {user && <SignOutButton />}
      {!user && (
        <Link href="/login" className={`${varients.ghost} ${sizes.sm} py-2`}>
          {/* <KeyRound className="w-6 h-6 " /> */}
          Sign In
        </Link>
      )}
    </div>
  );
};

const MobileNav = () => (
  <div className="z-50 drawer drawer-end ">
    <input id="mobonav" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content">
      {/* Page content here */}
      <label htmlFor="mobonav" className="cursor-pointer drawer-button">
        <Menu size={28} />
      </label>
    </div>
    <div className="drawer-side">
      <label
        htmlFor="mobonav"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="flex flex-col items-center justify-start min-h-full p-4 space-y-4 menu bg-slate-100 dark:bg-slate-900 w-80">
        <li>
          <Link
            href="/dashboard"
            className="font-semibold hover:underline hover:underline-offset-8 decoration-2"
          >
            dashboard
          </Link>
        </li>
        <li>
          <ToggleMode />
        </li>
        <li>
          <UserDropdown />
        </li>
      </ul>
    </div>
  </div>
);

const PageHeader = ({ className }) => {
  return (
    <header
      className={`flex items-center justify-between ${className} w-full min-h-[10vh] container mx-auto`}
    >
      <Link href="/" className="text-xl font-bold ">
        Finance Guru
      </Link>
      <div className="items-center hidden space-x-6 md:flex">
        <Link
          href="/dashboard"
          className="font-semibold hover:underline hover:underline-offset-8 decoration-2"
        >
          dashboard
        </Link>
        <ToggleMode />
        <UserDropdown />
      </div>
      <div className=" md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default PageHeader;
