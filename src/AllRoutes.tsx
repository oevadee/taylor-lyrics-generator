import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";
import { HistoryInfo } from "./components";

const AllRoutes = () => {
  return (
    <Router>
      <Switch>
        <Redirect to="/app" />
      </Switch>
      <Route path="/app" component={App} />
      <Route path="/lyrics-info" component={HistoryInfo} />
    </Router>
  );
};

export default AllRoutes;
