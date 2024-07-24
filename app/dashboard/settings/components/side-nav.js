'use client';

import Link from 'next/link';
import { User, Camera, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

const SideNav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/dashboard/settings"
            className={`side-nav-item ${
              pathname === '/dashboard/settings'
                ? 'bg-gray-100 dark:bg-gray-800'
                : ''
            } `}
          >
            <Settings className="w-4 h-4 " />
            <span>Settings</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings/avatar"
            className={`side-nav-item ${
              pathname === '/dashboard/settings/avatar'
                ? 'bg-gray-100 dark:bg-gray-800'
                : ''
            } `}
          >
            <Camera className="w-4 h-4 " />
            <span>Avatar</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings/profile"
            className={`side-nav-item ${
              pathname === '/dashboard/settings/profile'
                ? 'bg-gray-100 dark:bg-gray-800'
                : ''
            } `}
          >
            <User className="w-4 h-4 " />
            <span>Profile</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
