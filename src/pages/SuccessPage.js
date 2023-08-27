import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function SuccessPage({ finalOrder }) {
  const history = useHistory();
  useEffect(() => {
    if (!finalOrder) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }

    return () => {};
  }, []);

  return (
    <div className="successBody">
      <div className="successPage d-flex flex-column align-items-center">
        <h2>Tebrikler!</h2>
        <h2>Siparisiniz Alindi!</h2>
      </div>
    </div>
  );
}

export default SuccessPage;
