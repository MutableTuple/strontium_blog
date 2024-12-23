import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-6 mt-12 shadow-lg border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-lg font-bold text-gray-800 mb-4 sm:mb-0">
            Strontium
          </div>
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
            <li>
              <Link
                href="/stores"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Stores
              </Link>
            </li>
            <li>
              <Link
                href="/shorts"
                className="text-gray-800 hover:text-gray-600 transition-colors duration-200"
              >
                Shorts
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-4 flex justify-center space-x-6">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-200"
          >
            <FaFacebook size={24} />
          </Link>
          <Link
            href="https://www.twitter.com"
            target="_blank"
            className="text-gray-800 hover:text-blue-400 transition-colors duration-200"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            className="text-gray-800 hover:text-pink-500 transition-colors duration-200"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="text-gray-800 hover:text-blue-700 transition-colors duration-200"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} Strontium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
