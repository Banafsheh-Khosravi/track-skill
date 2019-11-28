import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "../components/Homepage";

export default (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  </BrowserRouter>
);
