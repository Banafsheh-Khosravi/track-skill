import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";
import Admin from "../components/Admin";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/admin" exact component={Admin} />
    </Switch>
  </BrowserRouter>
);
