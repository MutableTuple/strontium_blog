"use client";

import React, { useState } from "react";
import { BiUpvote } from "react-icons/bi";
import { upvoteItem } from "../_lib/actions";
export default function UpvoteBtn({ table, id, initialUpvotes }) {
  const [upvotes, setUpvotes] = useState(initialUpvotes);

  const handleUpvote = async (e) => {
    e.preventDefault();
    try {
      const newUpvotes = await upvoteItem(table, id);
      if (newUpvotes !== null) {
        setUpvotes(newUpvotes);
      }
    } catch (error) {
      console.error("Failed to upvote:", error);
    }
  };

  return (
    <form className="flex items-center gap-1" onSubmit={handleUpvote}>
      <button
        type="submit"
        className="flex items-center gap-1 hover:text-blue-500 transition"
      >
        <BiUpvote className="text-sm sm:text-base" />
        {upvotes}
      </button>
    </form>
  );
}
