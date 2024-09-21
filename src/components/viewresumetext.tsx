'use client';

import Link from 'next/link';
import { IconArrowNarrowRight } from '@tabler/icons-react'; // Import the icon

export default function Portfolio() {
  return (
    <Link
      href="/resume"
      className="inline-flex items-center rounded-lg border border-transparent bg-yellow-500 px-4 py-2 font-semibold text-white shadow-md transition-colors duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
    >
      <span className="mr-2">Resume</span>
      <IconArrowNarrowRight size={16} />
    </Link>
  );
}
