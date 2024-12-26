import React from "react";
import MiniBlogCard from "./MiniBlogCard";
import { getAllBlogs } from "../_lib/data-service";
import Link from "next/link";
export default async function BlogsList() {
  const blogs = await getAllBlogs();
  return (
    <>
      {blogs.map((blog) => (
        <Link href={`blog/${blog.title_slug}`}>
          <MiniBlogCard
            id={blog.id}
            title={blog.blog_title}
            description={blog.short_description.slice(0, 100) + "..."}
            upvotes={blog.likes}
            comments={blog.comments}
            image={blog.image}
            author_image={blog.users.image}
            author={blog.users.name}
          />
        </Link>
      ))}
    </>
  );
}
