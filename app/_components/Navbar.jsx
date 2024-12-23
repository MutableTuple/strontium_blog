"use client";

import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-stone-50 text-stone-950 py-4 px-8 border-b flex justify-between items-center">
      <div className="text-xl font-semibold">Strontium</div>
      <ul className="hidden md:flex gap-8">
        <li className="hover:text-stone-500 cursor-pointer">Trending Blogs</li>
        <li className="hover:text-stone-500 cursor-pointer">Stories</li>
        <li className="hover:text-stone-500 cursor-pointer">Strontium.app</li>
        <li className="hover:text-stone-500 cursor-pointer">Promotions</li>
        <li className="hover:text-stone-500 cursor-pointer">Login</li>
      </ul>

      {/* Mobile Hamburger Menu */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-stone-50 text-stone-950 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-center">
            <li className="hover:text-stone-500 cursor-pointer">
              Trending Blogs
            </li>
            <li className="hover:text-stone-500 cursor-pointer">Stories</li>
            <li className="hover:text-stone-500 cursor-pointer">
              Strontium.app
            </li>
            <li className="hover:text-stone-500 cursor-pointer">Promotions</li>
            <li className="hover:text-stone-500 cursor-pointer">Login</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
