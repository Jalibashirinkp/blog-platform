import { Link } from "react-router-dom";

function BlogCard({ post }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        margin: "20px",
        borderRadius: "8px",
      }}
    >
      <h2>{post.title}</h2>

      <p>{post.content.substring(0, 120)}...</p>

      <p>
        <b>Author:</b> {post.author?.username}
      </p>

      <Link to={`/post/${post._id}`}>Read More</Link>
    </div>
  );
}

export default BlogCard;