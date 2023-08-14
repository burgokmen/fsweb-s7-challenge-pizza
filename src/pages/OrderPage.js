import React from "react";
import Counter from "../components/Counter";
import PizzaForm from "../components/PizzaForm";

function OrderPage() {
  return (
    <div>
      <h2> Position Absolute Aci Pizza</h2>
      <div class="d-flex justify-content-between">
        <p>{/* Toplam Para */}100tl</p>
        <div class="d-flex">
          <p>4.9</p>
          <p>(200)</p>
        </div>
      </div>
      <hr />
      <div>
        <p>
          Frontent Dev olarak hala position:absolute kullaniyorsan bu cok aci
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çesitli
          diger malzemelerle kaplanmis, daha sonra geleneksel olarak odun
          atesinde bir firinda yüksek sicaklikta pisirilen, genellikle yuvarlak,
          düzlestirilmis mayal budday bazli hamurdan olusan italyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
      </div>
      <PizzaForm />
      <hr />
      <Counter />
    </div>
  );
}

export default OrderPage;
