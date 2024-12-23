import React from "react";
import { BiUpvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import UpvoteBtn from "./UpvoteBtn";

export default async function MiniBlogCard({
  title,
  description,
  upvotes,
  author = "author",
  comments,
  image,
}) {
  return (
    <div className="w-full border-b p-3 sm:p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="flex flex-col gap-3 sm:gap-4 justify-between">
          <div className="flex flex-col gap-3 sm:gap-4">
            <h1 className="font-bold text-lg sm:text-xl text-stone-800">
              {title}
            </h1>
            <p className="text-xs text-stone-800 line-clamp-3 sm:line-clamp-none">
              {description}
            </p>
            <div className="flex text-xs gap-2 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/92/NiKo_2020_interview_crop.jpg"
                alt=""
                className="h-4 w-4 sm:h-5 sm:w-5 rounded-full object-cover"
              />
              {author}
            </div>
          </div>
          <div className="flex gap-3 text-xs">
            <UpvoteBtn upvotes={upvotes} />
            <div className="flex items-center gap-1">
              <FaRegCommentAlt className="text-sm sm:text-base" />
              {comments}
            </div>
          </div>
        </div>
        <div className="w-full h-48 sm:h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover  "
          />
        </div>
      </div>
    </div>
  );
}
