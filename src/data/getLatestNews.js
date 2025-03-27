import { useEffect, useState } from 'react';
import useRequestStore from '../store/APIStore/useRequestStore';

const useLatestPosts = () => {
  const { loading, setLoading, error, setError } = useRequestStore();
  const [posts, setPosts] = useState([]);

  const mockData = [
    {
      newsPost: "Breaking News: Major Event Happens",
      writtenBy: "John Doe",
      location: "New York",
      date: new Date().toISOString(),
      title: "Major Event",
      body: "Details about the major event that happened.",
      image: "https://placehold.co/600x600"
    },
    {
      newsPost: "Sports Update: Local Team Wins",
      writtenBy: "Jane Smith",
      location: "Los Angeles",
      date: new Date().toISOString(),
      title: "Local Team Victory",
      body: "Summary of the local team's victory.",
      image: "https://placehold.co/600x600"
    },
    {
      newsPost: "Weather Alert: Storm Approaching",
      writtenBy: "Weather Channel",
      location: "Chicago",
      date: new Date().toISOString(),
      title: "Storm Warning",
      body: "Details about the approaching storm.",
      image: "https://placehold.co/600x600"
    }
  ];

  useEffect(() => {
    setLoading(true);
    setError(null);
    try {
      setPosts(mockData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { posts, loading, error };
};

export default useLatestPosts;
