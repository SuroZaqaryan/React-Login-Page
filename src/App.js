import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Register from "./components/Form/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import SignUp from "./components/Form/SignUp/SignUp";

const App = () => {
  const [loggedIn, setloggedIn] = useState(false);

  function callbackFunction(childData) {
    setloggedIn(childData);
  }

  return (
    <Router >
      <Switch>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <Register parentCallback={callbackFunction}/>
        </Route>
        <Register parentCallback={callbackFunction} />
        {/* <Route path="/">
          {loggedIn ? (
            <Redirect to="/Dashboard" />
          ) : (
            <Register parentCallback={callbackFunction} />
          )}
        </Route> */}
      </Switch>
    </Router>
  );
};

export default App;
