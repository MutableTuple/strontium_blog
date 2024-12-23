import React from "react";
import HomeTopicsSidebar from "../_components/HomeTopicsSidebar";
import BlogsList from "../_components/BlogsList";

export default function page() {
  return (
    <div className="mt-8 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
        <div className="lg:col-span-4">
          <BlogsList />
        </div>
        <div className="lg:col-span-2">
          <HomeTopicsSidebar />
        </div>
      </div>
    </div>
  );
}
