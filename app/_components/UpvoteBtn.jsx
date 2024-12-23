import React from "react";
import { BiUpvote } from "react-icons/bi";
import { incrementUpvoteById } from "../_lib/data-service";
export default function UpvoteBtn({ upvotes }) {
  return (
    <div className="flex items-center gap-1">
      <BiUpvote className="text-sm sm:text-base" />
      {upvotes}
    </div>
  );
}
