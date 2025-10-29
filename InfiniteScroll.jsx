import React, { useState, useEffect } from 'react';

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]);     
  const [page, setPage] = useState(1);        
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true); 

 
  const fetchPosts = async () => {
    if (!hasMore) return;
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );
    const data = await res.json();

    if (data.length === 0) {
      setHasMore(false);
    } else {
      setPosts((prev) => [...prev, ...data]);
    }

    setLoading(false);
  };


  useEffect(() => {
    fetchPosts();
  }, [page]);

 
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 2 &&
        !loading &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      <h2>Infinite Scroll Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      {loading && <p>Loading more posts...</p>}
      {!hasMore && <p>No more posts to load</p>}
    </div>
  );
};

export default InfiniteScroll;
