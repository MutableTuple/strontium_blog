import React from "react";
import { getBlogIDByName } from "@/app/_lib/data-service";
import BlogData from "@/app/_components/BlogData";
export default async function page({ params }) {
  const { blogName } = await params;

  const requested_blog = await getBlogIDByName(blogName);
  console.log("sdsds", requested_blog);

  //   console.log(requested_blog ? requested_blog : "No blog found");
  //   console.log("blogNAmae", blogName);

  return (
    <div className="lg:mx-52 md:mx-32 sm:mx-16 mx-8">
      <BlogData requested_blog={requested_blog} />
    </div>
  );
}
