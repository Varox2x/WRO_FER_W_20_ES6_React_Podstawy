import React from "react";
import ReactDOM from "react-dom";

const firstnumber = parseFloat(prompt("Podaj A . . ."));
const secendnumber = parseFloat(prompt("Podaj B . . ."));
const operation = prompt("Podaj Operacje . . .");

function Calc(a, b, operations) {
    if (operation == "+"){
        return <h1>Wynik to {a + b}</h1>
    }
    if (operation == "-"){
        return <h1>Wynik to {a - b}</h1>
    }
    if (operation == "*"){
        return <h1>Wynik to {a * b}</h1>
    }
    if (operation == "/"){
        return <h1>Wynik to {a / b}</h1>
    }
}


ReactDOM.render(
    <div>
        {Calc(firstnumber, secendnumber, operation)}
    </div>,
  document.getElementById("app")
);
