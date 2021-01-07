import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Page from "./navigation/Page";

const App = ({ routes }) => (
  <BrowserRouter basename="/">
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} path={route.path}>
          <Page route={route} />
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
