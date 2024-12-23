import React from "react";
import ShortsCard from "../_components/ShortsCard";
export default function page() {
  return (
    <div className="m-16">
      <div className="grid grid-cols-6 gap-16">
        <ShortsCard title="Strontium" />
      </div>
    </div>
  );
}
