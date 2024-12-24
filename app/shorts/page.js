"use client";
import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { getAllStories } from "../_lib/data-service";
import ShortsCard from "../_components/ShortsCard";

export default function Page() {
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch stories when the component mounts
    const fetchStories = async () => {
      const data = await getAllStories();
      setStories(data);
    };

    fetchStories();
  }, []);

  // Function to go to the next or previous story
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  // Set up the swipeable options
  const swipeHandlers = useSwipeable({
    onSwipedUp: goToNext, // Swipe up for the next story
    onSwipedDown: goToPrev, // Swipe down for the previous story
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enable mouse tracking for desktop swipe-like experience
  });

  return (
    <div className="m-16">
      <div className="relative h-full" {...swipeHandlers}>
        {/* Show the ShortsCard based on current index */}
        {stories.length > 0 && (
          <ShortsCard
            title={stories[currentIndex].title}
            image={stories[currentIndex].image}
            description={stories[currentIndex].description}
          />
        )}
        {/* Optional: Show a loading message or fallback */}
        {stories.length === 0 && <p>Loading stories...</p>}
      </div>
    </div>
  );
}
