import React from "react";
import { Button } from "reactstrap";
import FinalCountdown from "./FinalCountdown";

function Counter({ counter, setCounter, total, toppings }) {
  return (
    <div className="d-flex justify-content-around">
      <div className="d-flex align-content-start flex-wrap  ">
        <Button
          color="warning"
          onClick={() => setCounter(Math.max(counter - 1, 1))}
          className="rounded"
        >
          -
        </Button>
        <div className="border p-2">{counter}</div>
        <Button
          className="rounded"
          color="warning"
          onClick={() => setCounter(Math.min(counter + 1, 6))}
        >
          +
        </Button>
      </div>
      <FinalCountdown total={total} toppings={toppings} />
    </div>
  );
}

export default Counter;
