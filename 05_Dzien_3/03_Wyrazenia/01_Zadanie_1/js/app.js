import React from "react";
import ReactDOM from "react-dom";

function CalculateUserData() {
    const firstnumber = parseFloat(prompt("Podaj liczbe a prosze:"));
    const secendnumber = parseFloat(prompt("Podaj liczbe b prosze:"));

    return <div>{firstnumber + secendnumber}</div>;
}

ReactDOM.render(
  <CalculateUserData/>,
  document.getElementById("app")
);
