import React from "react";
import MiniBlogCard from "./MiniBlogCard";
import { getAllBlogs } from "../_lib/data-service";
export default async function BlogsList() {
  const blogs = await getAllBlogs();

  return (
    <>
      {blogs.map((blog) => (
        <MiniBlogCard
          title={blog.blog_title}
          description={blog.short_description.slice(0, 100) + "..."}
          upvotes={blog.likes}
          comments={blog.comments}
          image={blog.image}
        />
      ))}
    </>
  );
}
