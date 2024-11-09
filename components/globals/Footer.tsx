'use client';

import { WebsiteCarbonBadge } from 'react-websitecarbon-badge';
import Link from 'next/link';
import Disclaimer from './Disclaimer';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 w-full p-8 bg-chineseBlack">
      <p className="text-sm flex flex-col">
        <span className="text-lg accent font-serif">note</span>
        This app is designed to identify and help resolve a wide range of a11y
        issues during development. It is not a complete solution to
        accessibility-compliance. Proper testing also involves real-life user
        interaction and emulating screen-reader and keyboard navigation in your
        applications using a local build prior to production.
      </p>
      <Disclaimer />
      <div className="flex items-center justify-between flex-wrap gap-4 ">
        <div>
          <p className="text-sm">© a11y-stack | 2024</p>
          <p className="text-sm">
            Designed and Developed by{' '}
            <Link className="text-accent" href="a11y-stack.com">
              Aman Singh Bhogal
            </Link>
          </p>
        </div>
        <WebsiteCarbonBadge url="www.a11y-stack.com" dark />
      </div>
    </footer>
  );
}
