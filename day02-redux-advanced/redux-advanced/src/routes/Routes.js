import React from "react";
import { Switch, Route } from "react-router-dom";

import Books from "../components/Books";
import OrderBook from "../components/OrderBook";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Books} />
      <Route path="/order" component={OrderBook} />
    </Switch>
  );
};

export default Routes;
