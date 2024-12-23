import React from "react";
export default function ShortsCard({
  title,
  description,
  upvotes,
  author = "author",
  comments,
  image,
}) {
  return (
    <div className="h-96 w-72 border p-4">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
