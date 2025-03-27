import React, { useState } from 'react';
import locales from '../../public/locales/locales.en.json';
import ErrorBoundary from '../components/ErrorBoundary.jsx';
import LatestNews from '../components/LatestNews.jsx';
import useLatestPosts from '../data/getLatestNews.js';
import ReusableButton from '../components/buttons/reusableButton.jsx'

function News() {
  const [visibleCount, setVisibleCount] = useState(3);
  const newsPosts = locales.screens.latestNews.posts;



  const loadMoreArticles = () => {
    setVisibleCount(visibleCount + 3);
  };

  const { posts, loading, error } = useLatestPosts();

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ErrorBoundary>
      <div className="min-h-screen container mt-64 mx-auto px-8">
        <h1 className="text-4xl font-bold mb-8">
          {locales.screens.latestNews.title}
        </h1>

        <div className="px-4 py-8">
          <div className="flex flex-col gap-6">
          {posts.slice(0, visibleCount).map((post, index) => (
              <LatestNews
                key={index}
                newsPost={post.newsPost || newsPosts[index].newsPost}
                writtenBy={post.writtenBy || newsPosts[index].writtenBy}
                location={post.location || newsPosts[index].location}
                date={post.date || newsPosts[index].date}
                title={post.title || newsPosts[index].title}
                content={post.body || newsPosts[index].description}
                image={post.image || newsPosts[index].image}
              />
            ))}
          </div>
          <ReusableButton text="Load More" onClick={loadMoreArticles} className="mx-auto py-4" />

        </div>
      </div>
    </ErrorBoundary>
  );
}

export default News;
