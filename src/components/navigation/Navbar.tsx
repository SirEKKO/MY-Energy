import { BoltIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-gradient-to-r from-indigo-500 to-[#1c1c1c] text-white">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <BoltIcon className="h-6 w-6 text-white" />
        <span className="sr-only">MyEnergy</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
          Profile
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 text-white" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;