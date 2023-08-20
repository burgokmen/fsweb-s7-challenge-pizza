import React, { useState } from "react";
import NavLink1 from "../components/NavLink";
import tlSimge from "../util";

import PizzaForm from "../components/PizzaForm";

function OrderPage() {
  const exampleObj = {
    name: "Position Absolute Aci Pizza",
    blabla: `Frontent Dev olarak hala position:absolute kullaniyorsan bu cok aci
    pizza tam sana göre. Pizza, domates, peynir ve genellikle çesitli
    diger malzemelerle kaplanmis, daha sonra geleneksel olarak odun
    atesinde bir firinda yüksek sicaklikta pisirilen, genellikle
    yuvarlak, düzlestirilmis mayal budday bazli hamurdan olusan italyan
    kökenli lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta
    denir.`,
    rating: "4.9",
    reviewnum: "200",
  };
  const [total, setTotal] = useState(0);

  return (
    <div className="order-page">
      <div className="p-3 navlink11">
        <NavLink1 />
      </div>
      <div className="p-5">
        <br />

        <h2> {exampleObj.name} </h2>
        <br />
        <br />
        <div className="d-flex justify-content-between">
          <p>
            {total}
            {tlSimge}
          </p>
          <div id="rating" className="d-flex">
            <p>{exampleObj.rating}</p>
            <p>{exampleObj.reviewnum}</p>
          </div>
        </div>

        <br />
        <div>
          <p>{exampleObj.blabla}</p>
        </div>
        <PizzaForm total={total} setTotal={setTotal} name={exampleObj.name} />
      </div>
    </div>
  );
}

export default OrderPage;
