import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input } from "reactstrap";

import Counter from "./Counter";
import tlSimge from "../util";

function PizzaForm({ name }) {
  const toppingsAll = [
    "Pepperoni",
    "Domates",
    "Biber",
    "Sosis",
    "Mısır",
    "Sucuk",
    "Kanada Jambonu",
    "Acı Sos",
    "Ananas",
    "Tavuk Izgara",
    "Jalepeno",
    "Kabak",
    "Soğan",
    "Sarımsak",
  ];

  const aPizza = {
    name: `${name}`,
    pizzasize: "",
    thickness: "",
    Pepperoni: false,
    Domates: false,
    Biber: false,
    Sosis: false,
    Mısır: false,
    Sucuk: false,
    "Kanada Jambonu ": false,
    "Acı Sos": false,
    Ananas: false,
    "Tavuk Izgara": false,
    Jalepeno: false,
    Kabak: false,
    Soğan: false,
    Sarımsak: false,
    note: "",
    quantity: 1,
  };
  const [counter, setCounter] = useState(1);
  const [pizzaOrder, setPizzaOrder] = useState(aPizza);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Siparis Verildi");
    axios
      .post("https://reqres.in/api/users", pizzaOrder)
      .then((response) => console.log(response.data));
  };

  useEffect(() => {
    console.log(pizzaOrder);
  }, [pizzaOrder]);

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;

    setPizzaOrder({
      ...pizzaOrder,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Form onSubmit={handleSubmit} id="pizza-form">
      <br />
      <br />
      <br />
      <div className="d-flex p-2 justify-content-between">
        <div>
          <h4> Boyut Seç </h4>
          <FormGroup className="d-flex flex-column" id="size-dropdown" check>
            <Label check>
              <Input
                type="radio"
                name="pizzasize"
                value="Küçük"
                onChange={changeHandler}
              />
              Küçük
            </Label>
            <Label check>
              <Input
                type="radio"
                name="pizzasize"
                value="Orta"
                onChange={changeHandler}
              />
              Orta
            </Label>

            <Label check>
              <Input
                type="radio"
                name="pizzasize"
                value="Büyük"
                onChange={changeHandler}
              />
              Büyük
            </Label>
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <h4>
              <Label for="pizzaSelect"> Hamur Seç</Label>
            </h4>
            <Input
              type="select"
              name="thickness"
              id="pizzaSelect"
              onChange={changeHandler}
            >
              <option value={aPizza.thickness}>Hamur Kalınlığı</option>
              <option value="İnce">İnce</option>
              <option value="Kalın">Kalın</option>
            </Input>
          </FormGroup>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h4> Ek Malzemeler</h4>
      <p>En fazla 10 malzeme seçebilirsiniz. 5{tlSimge}</p>
      <div className="d-flex flex-wrap justify-content-between gap-4">
        {toppingsAll.map((tops, i) => (
          <FormGroup key={i} check>
            <Label htmlFor={i} check>
              {tops}
            </Label>
            <Input
              id={i}
              type="checkbox"
              name={tops}
              onChange={changeHandler}
            />
          </FormGroup>
        ))}
      </div>
      <br />
      <br />
      <br />
      <h4>Siparis Notu</h4>
      <FormGroup>
        <Input
          id="special-text"
          name="note"
          placeholder="Siparise eklemek istediginiz birsey var mi?"
          bsSize="lg"
          onChange={changeHandler}
        />
      </FormGroup>
      <hr />
      <Counter counter={counter} setCounter={setCounter} />
    </Form>
  );
}

export default PizzaForm;
