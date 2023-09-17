import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
import * as Yup from "yup";

import Counter from "./Counter";
import tlSimge from "../util";

function PizzaForm({ name, total, setTotal, setFinalOrder }) {
  const formSchema = Yup.object().shape({
    pizzasize: Yup.string().required("Pizzanızın boyutunu seçiniz."),
    thickness: Yup.string().required("Pizzanızın kalinligini seçiniz."),
    note: Yup.string().max(50, "En fazla 50 karakter girebilirsiniz."),
    tops: Yup.array().min(4, "En az 4").max(10, "En fazla 10 adet"),
  });

  let sizePrices = 0;
  const pizzaSizeArr = ["Küçük", "Orta", "Büyük"];
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
    tops: [],
    note: "",
  };

  const [counter, setCounter] = useState(1);
  const [pizzaOrder, setPizzaOrder] = useState(aPizza);
  const [toppings, setToppings] = useState(0);
  const [isFormValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  function validateOrder(formSchema, name, value) {
    Yup.reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Siparis Verildi");
    axios.post("https://reqres.in/api/users", pizzaOrder).then((response) => {
      console.log(response.data);
      setFinalOrder(response.data);
    });
  };

  const changeHandler = (e) => {
    const { name, type, value, ß } = e.target;

    if (type === "checkbox") {
      let newTops = [];
      if (!pizzaOrder.tops.includes(name)) {
        newTops = [...pizzaOrder.tops, name];
      } else {
        newTops = pizzaOrder.tops.filter((a) => a !== name);
      }

      setPizzaOrder({
        ...pizzaOrder,
        tops: newTops,
      });
      validateOrder(formSchema, "tops", newTops);
    } else {
      setPizzaOrder({
        ...pizzaOrder,
        [name]: value,
      });
      validateOrder(formSchema, name, value);
    }
  };

  useEffect(() => {
    console.log(pizzaOrder);

    let toppingsPrice = pizzaOrder.tops.length * 5;
    const sizePrices = {
      Büyük: 90,
      Orta: 70,
      Küçük: 50,
    };
    const sizePrice = sizePrices[pizzaOrder.pizzasize] || 0;
    setToppings(toppingsPrice * counter);
    setTotal((sizePrice + toppingsPrice) * counter);
    formSchema.isValid(pizzaOrder).then((valid) => setFormValid(valid));
  }, [counter, pizzaOrder, sizePrices, setTotal]);

  return (
    <Form onSubmit={handleSubmit} id="pizza-form">
      <br />
      <br />
      <br />
      <div className="d-flex p-2 justify-content-between">
        <div>
          <h4> Boyut Seç </h4>
          <FormGroup className="d-flex flex-column" id="size-dropdown" check>
            {pizzaSizeArr.map((size, i) => (
              <div key={i}>
                <Label check>
                  <Input
                    type="radio"
                    name="pizzasize"
                    value={size}
                    onChange={changeHandler}
                    invalid={!!errors.pizzasize}
                  />
                  {size}
                </Label>
              </div>
            ))}
            <FormFeedback>{errors.pizzasize}</FormFeedback>
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
              defaultValue=""
            >
              <option disabled value="">
                Hamur Kalınlığı
              </option>
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
              invalid={!!errors.tops}
            />
          </FormGroup>
        ))}

        {errors.tops && <div className="invalsid-feedback">{errors.tops}</div>}
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
          invalid={!!errors.note}
        />
        <FormFeedback>{errors.note}</FormFeedback>
      </FormGroup>
      <hr />
      <Counter
        pizzaOrder={pizzaOrder}
        setPizzaOrder={setPizzaOrder}
        aPizza={aPizza}
        counter={counter}
        setCounter={setCounter}
        quantity={aPizza.quantity}
        total={total}
        toppings={toppings}
        isFormValid={isFormValid}
      />
    </Form>
  );
}

export default PizzaForm;
