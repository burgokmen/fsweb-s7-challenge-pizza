import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";

function PageBody() {
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/order" exact>
        <OrderPage />
      </Route>
      <Route path="/done" exact>
        <SuccessPage />
      </Route>
    </Switch>
  );
}

export default PageBody;
