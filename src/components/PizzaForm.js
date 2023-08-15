import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Counter from "../components/Counter";

const tlSimge = "₺";
const ekMalz = [
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

function PizzaForm() {
  return (
    <Form>
      <br />
      <br />
      <br />
      <div className="d-flex p-2 justify-content-between">
        <div>
          <FormGroup>
            <h4> Boyut Seç </h4>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="pizzasize" /> Küçük
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="pizzasize" /> Orta
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="pizzasize" /> Büyük
              </Label>
            </FormGroup>
          </FormGroup>
        </div>
        <div>
          <FormGroup>
            <h4>
              <Label for="pizzaSelect"> Hamur Seç</Label>
            </h4>
            <Input type="select" name="select" id="pizzaSelect">
              <option value="">Hamur Kalınlığı</option>
              <option>İnce</option>
              <option>Kalın</option>
            </Input>
          </FormGroup>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h4> Ek Malzemeler</h4>
      <p>En fazla 10 malzeme seçebilirsiniz. 5{tlSimge}</p>
      <div className="d-flex flex-wrap">
        {ekMalz.map((e, i) => (
          <FormGroup check>
            <Label htmlFor={e}> {e} </Label>
            <Input key={i} id={i} type="checkbox" name={e} />
          </FormGroup>
        ))}
      </div>
      <br />
      <br />
      <br />
      <h4>Siparis Notu</h4>
      <FormGroup>
        <Input
          placeholder="Siparise eklemek istediginiz birsey var mi?"
          bsSize="lg"
        />
      </FormGroup>
      <hr />
      <div>
        <Counter />
        <div>
          <div>
            <h4>Siparis Toplami</h4>
            <div>
              <p>Secimler</p>
              <p>25tl {/* buraya ek malzeme ucreti state gelecek */}</p>
            </div>
            <div>
              <p>Toplam</p>
              <p>110 {/* buraya toplam ucreti state gelecek */}</p>
            </div>
          </div>
          <Button> Siparis Ver</Button>
        </div>
      </div>
    </Form>
  );
}

export default PizzaForm;
