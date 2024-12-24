import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      The page you are looking for could not be located
      <Link href={"/"}> Go to home &rarr; </Link>
    </div>
  );
}
