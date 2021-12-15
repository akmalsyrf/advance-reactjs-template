import "bootstrap/dist/css/bootstrap.min.css";

// import necessary object from react-router-dom
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// import "pages" component here
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";

function App() {
  return (
    // define <BrowserRouter> as parent element
    <BrowserRouter>
      <div>
        {/* Setup navigation here */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* code <Switch> and <Route> below, according to path and component */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
