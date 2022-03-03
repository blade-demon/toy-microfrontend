import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Sub react app</h1>
      <h2>Home Page</h2>
      <nav>
        <Link to="about">About</Link> |<Link to="users">Users</Link>
      </nav>
    </div>
  );
}
