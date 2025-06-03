import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import locales from '../../public/locales/locales.en.json';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import LatestNews from '../components/LatestNews.jsx';
import ReusableButton from '../components/buttons/reusableButton.jsx';
import EventCard from '../components/event/Eventcard.jsx';
import useLatestPosts from '../data/getLatestNews.js';
import mockEvents from '../data/mockUpcomingEvents.js';

function News() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [newItems, setNewItems] = useState([]);
  const newsPosts = locales.screens.latestNews.posts;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    if (newItems.length > 0) {
      const timer = setTimeout(() => {
        setNewItems([]);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [newItems]);

  const loadMoreArticles = () => {
    const currentCount = visibleCount;
    const newCount = visibleCount + 3;

    const itemsToAnimate = [];
    for (let i = currentCount; i < newCount; i++) {
      itemsToAnimate.push(i);
    }

    setVisibleCount(newCount);
    setNewItems(itemsToAnimate);
  };

  const { posts, loading, error } = useLatestPosts();

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  const combinedPosts = posts.length > 0 ? posts : newsPosts;

  const hasMorePosts = visibleCount < combinedPosts.length;

  return (
    <ErrorBoundary>
      <div className="min-h-screen container mt-64 mx-auto px-8">
        <h1 id="latestNewsSection" className="text-4xl font-bold mb-8">
          {locales.screens.latestNews.title}
        </h1>

        <div className="px-4 py-8">
          <div className="flex flex-col gap-6">
            {combinedPosts.slice(0, visibleCount).map((post, index) => (
              <div
                key={index}
                className={`transform transition-all duration-300 ease-out ${
                  newItems.includes(index)
                    ? 'opacity-0 translate-y-6'
                    : 'opacity-100 translate-y-0'
                }`}
                style={{
                  transitionDelay: `${(index % 3) * 80}ms`,
                }}
              >
                <LatestNews
                  newsPost={post.newsPost || newsPosts[index].newsPost}
                  writtenBy={post.writtenBy || newsPosts[index].writtenBy}
                  location={post.location || newsPosts[index].location}
                  date={post.date || newsPosts[index].date}
                  title={post.title || newsPosts[index].title}
                  content={post.body || newsPosts[index].description}
                  image={post.image || newsPosts[index].image}
                />
              </div>
            ))}
          </div>
          {hasMorePosts && (
            <div className="mt-8 flex justify-center">
              <ReusableButton
                text="Load More"
                onClick={loadMoreArticles}
                className="mx-auto py-4"
              />
            </div>
          )}
        </div>
        <div id="eventsSection" className="mt-24">
          <div className="relative left-[calc(-50vw+50%)] w-screen h-[162px] bg-[var(--color-dark-green)] flex justify-center items-center mb-24">
            <h2 className="font-justAnotherHand text-white text-[100px]">
              Upcoming events
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 place-items-center mb-14">
            {mockEvents.slice(0, 12).map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          <div className="flex justify-center mb-14">
            <a href="#more-events" aria-label="Read More">
              <svg
                width="40"
                height="20"
                viewBox="0 0 40 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.2084 3.96313L21.4776 19.4931C21.2665 19.6774 21.0378 19.8077 20.7916 19.8839C20.5453 19.9613 20.2814 20 20 20C19.7186 20 19.4547 19.9613 19.2084 19.8839C18.9622 19.8077 18.7335 19.6774 18.5224 19.4931L0.738786 3.96313C0.246262 3.53303 0 2.99539 0 2.35023C0 1.70507 0.263852 1.15207 0.791557 0.691244C1.31926 0.230413 1.93492 0 2.63852 0C3.34213 0 3.95778 0.230413 4.48549 0.691244L20 14.2396L35.5145 0.691244C36.007 0.261137 36.6135 0.0460815 37.334 0.0460815C38.0559 0.0460815 38.6807 0.276497 39.2084 0.737326C39.7361 1.19816 40 1.73579 40 2.35023C40 2.96467 39.7361 3.5023 39.2084 3.96313Z"
                  fill="#EE6352"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default News;
