import React from 'react';
import Navbar from '@/components/Navbar';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F2F6F9]">
      {/* Fixed Floating Navbar, positioned exactly like the home page */}
      <div
        className="px-4 sm:px-6 md:px-12 lg:px-12 fixed left-0 right-0 z-[50] top-4 md:top-[50px]"
      >
        <Navbar />
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 pt-[150px]">
        {/* Blank for now as requested */}
      </div>
    </main>
  );
}
