import React from "react";
import { Button } from "reactstrap";

const HomePage = () => {
  return (
    <div className="homePage d-flex flex-column align-items-center">
      <div>
        <h2> KOD ACIKTIRIR</h2>
        <h2> PIZZA, DOYURUR</h2>
      </div>
      <div>
        <Button color="warning"> ACIKTIM </Button>
      </div>
    </div>
  );
};

export default HomePage;
