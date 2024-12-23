import BlogsList from "./_components/BlogsList";
import HomeTopicsSidebar from "./_components/HomeTopicsSidebar";

export default function Home() {
  return (
    <div className="mt-8 grid grid-cols-6 gap-12 mx-36">
      {/* Left Column: Blogs */}
      <div className="col-start-1 col-end-5">
        <BlogsList />
      </div>

      {/* Right Column: Picks/Topics */}
      <HomeTopicsSidebar />
    </div>
  );
}
