import Link from 'next/link';
import ToggleMode from './toggleMode';

const PageHeader = ({ className }) => {
  return (
    <header
      className={`flex items-center justify-between ${className} w-full py-4`}
    >
      <Link
        href="/dashboard"
        className="text-xl hover:underline hover:underline-offset-8 decoration-2"
      >
        Finance Tracker
      </Link>
      <div className="flex items-center space-x-4">
        <ToggleMode />
        <div>User Dropdown</div>
      </div>
    </header>
  );
};

export default PageHeader;
