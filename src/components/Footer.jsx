import React from 'react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-800 text-center text-neutral-400">
      <div className="container mx-auto px-6">
        <p className="mb-4 text-lg">
          Designed & Built by <span className="text-[#ff6b35] font-semibold">Dinu Devees George</span>
        </p>
        <p className="text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}