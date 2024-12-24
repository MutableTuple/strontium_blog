import StoriesData from "@/app/_components/StoriesData";
import { getAllStories, getStoryByID } from "@/app/_lib/data-service";
import React from "react";

export default async function page({ params }) {
  const { storiesId } = await params;
  const stories_data = await getStoryByID(storiesId);
  return (
    <div className="lg:mx-52 md:mx-32 sm:mx-16 mx-8">
      <StoriesData stories_data={stories_data} />
    </div>
  );
}
