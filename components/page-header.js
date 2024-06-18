import Link from 'next/link';

const PageHeader = ({ className }) => {
  return (
    <header className={`flex items-center justify-between ${className} w-full`}>
      <Link
        href="/dashboard"
        className="text-xl hover:underline hover:underline-offset-8 decoration-2"
      >
        Finance Tracker
      </Link>
      <div className="flex items-center space-x-4">
        <button>Toggle Darkmode</button>
        <div>User Dropdown</div>
      </div>
    </header>
  );
};

export default PageHeader;
