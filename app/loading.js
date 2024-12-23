"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white overflow-hidden">
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <span className="text-lg font-semibold text-gray-600">Loading...</span>
      </div>
    </div>
  );
}
