import React, { useState, useEffect } from 'react';
import locales from '../../public/locales/locales.en.json';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import LatestNews from '../components/LatestNews.jsx';
import useLatestPosts from '../data/getLatestNews.js';
import ReusableButton from '../components/buttons/reusableButton.jsx';
import { useLocation } from 'react-router-dom';

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
              <ReusableButton text="Load More" onClick={loadMoreArticles} className="mx-auto py-4"/>
            </div>
          )}
        </div>
        <div id="eventsSection">
          <h2>Events Section Placeholder</h2>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default News;