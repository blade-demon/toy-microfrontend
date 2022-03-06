import React from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Users from "./components/Users/Users";
import "./App.css";

function App(props) {
  console.log("react props", props);
  const routeBase = window.__POWERED_BY_QIANKUN__ ? props.routerBase : "/";
  console.log("react route base:", routeBase);
  return (
    <Router basename={routeBase}>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
