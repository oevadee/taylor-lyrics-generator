import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";

const AllRoutes = () => {
  return (
    <Router>
      <Redirect to="/app" />
      <Route path="/app" component={App} />
    </Router>
  );
};

export default AllRoutes;
