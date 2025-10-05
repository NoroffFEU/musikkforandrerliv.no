import { useEffect, useState } from 'react';
import useRequestStore from '../store/APIStore/useRequestStore';

const useLatestPosts = () => {
  const { loading, setLoading, error, setError } = useRequestStore();
  const [posts, setPosts] = useState([]);

  const mockData = [
    {
      newsPost: "Breaking News: Major Event Happens",
      writtenBy: "John Doe",
      location: "Madagascar",
      date: new Date().toISOString(),
      title: "Major Event",
      body: "Details about the major event that happened.",
      image: "https://placehold.co/600x600"
    },
    {
      newsPost: "Big upcoming concert",
      writtenBy: "Jane Smith",
      location: "Madagascar",
      date: new Date().toISOString(),
      title: "Tickets are selling out quickly",
      body: "There will be more guests than ever before.",
      image: "https://placehold.co/600x600"
    },
    {
      newsPost: "Teaching music inschool",
      writtenBy: "Anne Hathaway",
      location: "Madagascar",
      date: new Date().toISOString(),
      title: "Three musicians visiting",
      body: "Students learning to play and having fun.",
      image: "https://placehold.co/600x600"
    },
    {
      newsPost: "Dancing classes",
      writtenBy: "Win Harlow",
      location: "Madagascar",
      date: new Date().toISOString(),
      title: "Dancing classes at local studio",
      body: "Details about the latest dancing classes.",
      image: "https://placehold.co/600x600"
    },
    {
      newsPost: "Health Update: New Study Released",
      writtenBy: "Health Expert",
      location: "Madagascar",
      date: new Date().toISOString(),
      title: "Health Study",
      body: "Music and dance improves mood.",
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
