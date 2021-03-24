import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home/home";
import Users from "./components/users/users";
import Details from "./components/details/details";
import Bar from "./components/bar/bar";

function App() {
  //   const topFunction = () => {
  //     document.documentElement.scrollTop = 0;
  //   };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Bar />
            <Home />
          </Route>

          <Route path="/works/:id">
            <Bar />
            <Home />
          </Route>

          <Route path="/users/:id">
            <Bar />
            <Users />
          </Route>

          <Route path="/details/:id">
            <Bar />
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
