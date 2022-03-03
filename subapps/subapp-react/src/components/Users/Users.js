import { Link } from "react-router-dom";

export default function Users() {
  return (
    <div>
      <h1>Sub react app</h1>
      <h2>Users Page</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
