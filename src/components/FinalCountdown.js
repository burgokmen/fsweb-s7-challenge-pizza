import React from "react";
import { Button } from "reactstrap";
import tlSimge from "../util";

function FinalCountdown() {
  return (
    <div className="border rounded ">
      <div className="p-3">
        <h4>Siparis Toplami</h4>
        <div>
          <div className="d-flex justify-content-around">
            <p>Secimler</p>
            <p>
              25{tlSimge} {/* buraya ek malzeme ucreti state gelecek */}
            </p>
          </div>
          <div id="toplam" className="d-flex justify-content-around">
            <p>Toplam</p>
            <p>
              110{tlSimge} {/* buraya toplam ucreti state gelecek */}
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
