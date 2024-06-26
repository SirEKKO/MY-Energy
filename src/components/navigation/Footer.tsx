import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/20 bg-gradient-to-r from-indigo-500 to-[#1c1c1c] text-white">
      <p className="text-xs text-white/80">&copy; 2024 MyEnergy by Khalil and Moez. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-white" prefetch={false}>
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4 text-white" prefetch={false}>
          Privacy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;