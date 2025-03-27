import { useEffect, useState } from 'react';

import useRequestStore from '../store/APIStore/useRequestStore';

const API_URL = 'https://jsonplaceholder.typicode.com/posts'; // should be replaced with the real API

const useLatestPosts = () => {
  const { loading, setLoading, error, setError } = useRequestStore();
  const [posts, setPosts] = useState([]);

  const fetchLatestPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch posts');

      const data = await response.json();

      const sortedPosts = data
        .sort((a, b) => new Date(b.date) - new Date(a.date)) //assuming it has a date field
        .slice(0, 3); // get the latest 3 posts

      setPosts(sortedPosts);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  return { posts, loading, error };
};

export default useLatestPosts;
