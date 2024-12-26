import BlogData from "@/app/_components/BlogData";
import { getBlogByID } from "@/app/_lib/data-service";
import React from "react";

export default async function page({ params }) {
  const { blogid } = params;
  console.log(blogid);

  const requested_blog = await getBlogByID(blogid);
  console.log("sdsd", requested_blog);
  return (
    <div className="lg:mx-52 md:mx-32 sm:mx-16 mx-8">
      <BlogData requested_blog={requested_blog} />
    </div>
  );
}
