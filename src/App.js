import React from "react";
import { BrowserRouter } from "react-router-dom/";
import MainPage from "./layout/Main";

const App = () => {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
};
export default App;
