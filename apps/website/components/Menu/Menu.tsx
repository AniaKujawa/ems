'use client'
import { classMerge } from '@ems/common-ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { montserrat } from '../../app/fonts';

export const Menu = () => {
  const pathname = usePathname();

  const buildCssClass = (path: string) => {
    return classMerge("text-lg", { "text-red-400": path === pathname });
  }

  return (
    <nav className={`${montserrat.className} bg-slate-900 text-white`}>
      <div className="container mx-auto p-4">
        <div className="flex justify-between">
          <ul className="flex">
          <li className="mr-6">
              <Link href="/dashboard" className={buildCssClass('/dashboard')}>
                Dashboard
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about" className={buildCssClass('/about')}>
                About
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/job-offers" className={buildCssClass('/job-offers')}>
                Job offers
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/reviews" className={buildCssClass('/reviews')}>
                Reviews
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/contact" className={buildCssClass('/contact')}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center"></div>
        </div>
      </div>
    </nav>
  );
};