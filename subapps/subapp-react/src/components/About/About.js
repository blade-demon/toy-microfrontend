import { Link } from "react-router-dom";
export default function About() {
  return (
    <div>
      <h1>Sub react app</h1>
      <h2>About Page</h2>
      <nav>
        <Link to="/">Home</Link> | <Link to="/users">Users</Link>
      </nav>
    </div>
  );
}
