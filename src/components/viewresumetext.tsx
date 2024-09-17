"use client";

import Link from 'next/link';
import { IconArrowNarrowRight } from '@tabler/icons-react'; // Import the icon

export default function Portfolio() {
  return (
    <Link 
      href="/resume"
      className="inline-flex items-center px-4 py-2 rounded-lg border border-transparent bg-yellow-500 text-white font-semibold shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition-colors duration-300"
    >
      <span className="mr-2">View Resume</span>
      <IconArrowNarrowRight size={16} />
    </Link>
  );
}
