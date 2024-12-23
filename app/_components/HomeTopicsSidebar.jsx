import React from "react";
import { IoMdTrendingUp } from "react-icons/io";
import { getAllTrendingBlogs } from "../_lib/data-service";
import Link from "next/link";

export default async function HomeTopicsSidebar() {
  const trendingBlogs = await getAllTrendingBlogs();
  console.log("trending_blogs", trendingBlogs);

  return (
    <div className="hidden lg:block border-l px-8 w-full col-start-5 col-end-8">
      {/* Sticky wrapper */}
      <div className="sticky top-8">
        <h2 className="text-xl font-medium mb-4 flex gap-2 items-center">
          <IoMdTrendingUp /> Trending in past 24 hrs
        </h2>
        <div className="space-y-4 flex flex-col">
          {/* Map through the trending blogs */}
          {trendingBlogs.map((blog) => (
            <Link href={`blog/${blog.id}`} key={blog.id}>
              <div className="border py-4 flex flex-col gap-2 text-stone-950 p-2 hover:bg-stone-50 transition-all duration-200">
                <h3 className="font-semibold">{blog.blog_title}</h3>
                <p className="text-stone-800 text-xs">
                  {blog.short_description.slice(0, 150) + "...."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
