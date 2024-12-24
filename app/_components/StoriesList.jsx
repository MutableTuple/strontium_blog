import React from "react";
import MiniBlogCard from "./MiniBlogCard";
import { getAllBlogs, getAllStories } from "../_lib/data-service";
import Link from "next/link";
export default async function StoriesList() {
  const stories = await getAllStories();

  return (
    <>
      {stories.map((stories) => (
        <Link href={`stories/${stories.id}`}>
          <MiniBlogCard
            title={stories.name}
            description={stories.mini_description.slice(0, 100) + "..."}
            upvotes={stories.likes}
            comments={stories.comments}
            image={stories.image}
            author_image={stories.users.image}
            author={stories.users.name}
          />
        </Link>
      ))}
    </>
  );
}
