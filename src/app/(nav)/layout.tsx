import Footer from '@/components/navigation/Footer';
import Navbar from '@/components/navigation/Navbar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
