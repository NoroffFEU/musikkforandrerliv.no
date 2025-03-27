import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import locales from '../../public/locales/locales.en.json';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import LatestNews from '../components/LatestNews.jsx';

function News() {
  const newsPosts = locales.screens.latestNews.posts;
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView();
      }
    }
  }, [location]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen container mt-64 mx-auto px-8">
        <h1 id="latestNewsSection" className="text-4xl font-bold mb-8">
          {locales.screens.latestNews.title}
        </h1>

        <div className="px-4 py-8">
          <div className="flex flex-col gap-6">
            {newsPosts.map((post, index) => (
              <LatestNews
                key={index}
                newsPost={post.newsPost}
                writtenBy={post.writtenBy}
                location={post.location}
                date={post.date}
                title={post.title}
                content={post.description}
                image={post.image}
              />
            ))}
          </div>
        </div>
        <div id="eventsSection">
          <h2>Events Section Placeholder</h2>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default News;
