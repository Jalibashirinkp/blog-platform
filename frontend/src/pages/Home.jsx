import { useEffect, useState } from "react";
import api from "../services/api";
import BlogCard from "../components/BlogCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog Platform</h1>

      {posts.length === 0 ? (
        <p>No posts available.</p>
      ) : (
        posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))
      )}
    </div>
  );
}

export default Home;