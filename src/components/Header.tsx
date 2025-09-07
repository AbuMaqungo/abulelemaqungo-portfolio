'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with your full name */}
          <Link href="/" className="text-xl font-bold text-white">
            Abulele Maqungo
          </Link>

          {/* Desktop Navigation - More tabs */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Home
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              About
            </Link>
            <Link href="/projects" className="text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Projects
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Contact
            </Link>
            {/* Additional tabs */}
            <Link href="/skills" className="text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Skills
            </Link>
            <Link href="/experience" className="text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Experience
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-4">
            <Link href="/" className="block text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Home
            </Link>
            <Link href="/about" className="block text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              About
            </Link>
            <Link href="/projects" className="block text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Projects
            </Link>
            <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Contact
            </Link>
            <Link href="/skills" className="block text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Skills
            </Link>
            <Link href="/experience" className="block text-slate-300 hover:text-white transition-colors font-medium py-2 px-3 rounded hover:bg-slate-700">
              Experience
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}