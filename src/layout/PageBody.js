import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";

function PageBody() {
  const [finalOrder, setFinalOrder] = useState();
  return (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/pizza" exact>
        <OrderPage setFinalOrder={setFinalOrder} />
      </Route>
      <Route path="/done" exact>
        <SuccessPage finalOrder={finalOrder} />
      </Route>
    </Switch>
  );
}

export default PageBody;
