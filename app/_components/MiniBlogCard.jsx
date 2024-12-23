import React from "react";
import ReadButton from "./ReadButton";
import { BiUpvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";

export default async function MiniBlogCard({
  title,
  description,
  upvotes,
  author = "author",
  comments,
  image,
}) {
  return (
    <div className="w-full border-b p-4 grid grid-cols-2 gap-8">
      <div className="flex flex-col gap-4 justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-xl text-stone-800">{title}</h1>
          <p className="text-xs text-stone-800">{description}</p>
          <div className="flex text-xs gap-2 items-center  ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/NiKo_2020_interview_crop.jpg"
              alt=""
              className="h-5 w-5 rounded-full object-cover"
            />{" "}
            {author}
          </div>
        </div>
        <div className=" flex gap-3 text-xs">
          <div className="flex flex-col text-md gap-1 items-center   ">
            <BiUpvote /> {upvotes}
          </div>
          <div className="flex flex-col text-md gap-1 items-center   ">
            <FaRegCommentAlt />
            {comments}
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <img src={image} alt={title} className="object-cover " />
      </div>
    </div>
  );
}
