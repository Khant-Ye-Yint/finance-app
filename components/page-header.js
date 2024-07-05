import Link from 'next/link';
import ToggleMode from './toggleMode';
import { Menu } from 'lucide-react';

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
          <div>User Dropdown</div>
        </li>
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
        <div>User Dropdown</div>
      </div>
      <div className=" md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default PageHeader;
