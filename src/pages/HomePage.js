import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import banner from "../Assets/adv-aseets/adv-form-banner.png";

const HomePage = () => {
  return (
    <div className="order-page">
      <div className="homePage d-flex flex-column align-items-center">
        <div>
          <h2> KOD ACIKTIRIR</h2>
          <h2> PIZZA, DOYURUR</h2>
        </div>
        <div>
          <Link to="/pizza">
            <Button color="warning">ACIKTIM</Button>
          </Link>
        </div>
        <div className="banner-img">
          <img
            style={{ transform: "rotate(180deg)" }}
            alt="pizza"
            src={banner}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
