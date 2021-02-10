import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //   Link
} from "react-router-dom";

import Login from '../Login/Index'
import SignUp from '../SignUp/Index'
import Profile from '../Home/Profile/index'
import Feed from '../Home/Feed/index'


export default function Routes() {
  return (
    <Router>
      <div>
        {/* <nav>
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
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/Feed">
            <Feed />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

