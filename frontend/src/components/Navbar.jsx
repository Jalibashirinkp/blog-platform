import { Link } from "react-router-dom";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link>{" | "}

      {token ? (
        <>
          <Link to="/dashboard">Dashboard</Link>{" | "}
          <Link to="/create">Create Post</Link>{" | "}
          <button
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/";
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>{" | "}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;