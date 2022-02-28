import { BrowserRouter as Router, Link } from "react-router-dom";
import "./reset.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="router">
        <Router>
          <div>
            <nav>
              <ul>
                <li className="sub-meanu">
                  <Link to="/">首页</Link>
                </li>
                <li className="sub-meanu">
                  <Link to="/subapp-purehtml">子应用1</Link>
                </li>
                <li className="sub-meanu">
                  <Link to="/subapp-jquery">子应用2</Link>
                </li>
                <li className="sub-meanu">
                  <Link to="/subapp-react">子应用3</Link>
                </li>
                <li className="sub-meanu">
                  <Link to="/subapp-vue">子应用4</Link>
                </li>
              </ul>
            </nav>
          </div>
        </Router>
      </div>

      <div id="micro-container" />
    </div>
  );
}

export default App;
