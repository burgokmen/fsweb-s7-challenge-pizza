import React from "react";
import { Button } from "reactstrap";
import tlSimge from "../util";

function FinalCountdown({ total, toppings }) {
  return (
    <div className="border rounded ">
      <div className="p-3">
        <h4>Siparis Toplami</h4>
        <div>
          <div className="d-flex justify-content-around">
            <p>Secimler</p>
            <p>
              {toppings}
              {tlSimge}
            </p>
          </div>
          <div id="toplam" className="d-flex justify-content-around">
            <p>Toplam</p>
            <p>
              {total}
              {tlSimge}
            </p>
          </div>
        </div>
      </div>
      <Button
        type="submit"
        color="warning"
        //disabled={!!aPizza.pizzasize || !!aPizza.thickness}
        id="order-button"
      >
        Siparis Ver
      </Button>
    </div>
  );
}

export default FinalCountdown;
