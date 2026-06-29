import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function CreatePost() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/posts", form);

      alert("Post Created Successfully!");

      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <div style={{ width: "500px", margin: "40px auto" }}>
      <h2>Create Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <br /><br />

        <textarea
          name="content"
          rows="8"
          placeholder="Write your post..."
          value={form.content}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default CreatePost;