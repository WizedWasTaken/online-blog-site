'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { normalMenuItems, loginRegisterMenuItems } from '@/util/menuItems';

import HamburgerMenu from '@/components/non-reusable/header/HamburgerMenu';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className='container mx-auto flex justify-between flex-row'>
      <HamburgerMenu />
      <ul className='w-full hidden justify-between flex-row md:flex mt-5'>
        <ul className='flex justify-center w-full gap-2 flex-row'>
          {normalMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={` bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md ${
                    pathname === item.path
                      ? 'border-b-4 border-b-blue-500'
                      : 'text-primary-500'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className='flex gap-5'>
          {loginRegisterMenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item.path}
                  className={` bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md ${
                    pathname === item.path
                      ? 'border-b-4 border-b-blue-500'
                      : 'text-primary-500'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </ul>
    </nav>
  );
}
