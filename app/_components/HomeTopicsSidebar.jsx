import React from "react";
import { IoMdTrendingUp } from "react-icons/io";
const HomeTopicsSidebar = () => {
  return (
    <div className="hidden lg:block border-l px-8 w-full col-start-5 col-end-8">
      <div className="sticky top-8">
        <h2 className="text-xl font-medium mb-4 flex gap-2 items-center ">
          <IoMdTrendingUp /> Trending in past 24 hrs
        </h2>
        <div className="space-y-4">
          {/* Add components for topics or picks */}
          <div className="border py-4 flex flex-col gap-2 text-stone-950 p-2 hover:bg-stone-50 transition-all duration-200">
            <h3 className="font-semibold">Lionel Messi is messed up!</h3>
            <p className="text-stone-800 text-xs">et. Nisi animcupidatat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTopicsSidebar;
