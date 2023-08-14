import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import OrderPage from "../pages/OrderPage";
import SuccessPage from "../pages/SuccessPage";
import Header from "./Header";
import PageBody from "./PageBody";

const MainPage = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
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
      <div>
        <PageBody />
      </div>
    </div>
  );
};

export default MainPage;
