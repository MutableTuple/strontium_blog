"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // Importing Link component

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <div className="text-xl font-bold bg-gradient-to-r from-stone-950 to-stone-500 bg-clip-text text-transparent">
              Strontium
            </div>
          </Link>

          <ul className="hidden md:flex items-center space-x-8">
            {["Stories", "shorts"].map((item) => (
              <li
                key={item}
                className="text-stone-600 hover:text-stone-950 transition-colors duration-200"
              >
                <Link href={`/${item.replace(/\s+/g, "").toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <button className="px-4 py-2  bg-stone-950 text-white hover:bg-stone-800 transition-colors duration-200">
                Login
              </button>
            </li>
          </ul>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-64 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-2">
          <ul className="flex flex-col space-y-4">
            {["Trending Blogs", "Stories"].map((item) => (
              <li
                key={item}
                className="py-2 text-stone-600 hover:text-stone-950 transition-colors duration-200"
              >
                <Link href={`/${item.replace(/\s+/g, "").toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
            <li className="py-2">
              <button className="w-full px-4 py-2 rounded-full bg-stone-950 text-white hover:bg-stone-800 transition-colors duration-200">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
