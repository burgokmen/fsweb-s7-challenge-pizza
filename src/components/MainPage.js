import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";

const MainPage = () => {
  return (
    <div>
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
      <header>
        <h1>Teknolojik Yemekler</h1>
        <p>Karnin ac, doyuralim asko</p>
      </header>
    </div>
  );
};

export default MainPage;
