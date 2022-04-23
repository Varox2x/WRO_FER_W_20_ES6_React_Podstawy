import React from "react";
import ReactDOM from "react-dom";
import {calc} from "caniuse-lite/data/features";

const symbol = prompt("Podaj znak:. . .");
const firstNumber = parseFloat(prompt("Podaj liczbe A . . ."));
const secendNumber = parseFloat(prompt("Podaj liczbe B . . ."));

function Calc({a, b, symbol}){
    if (symbol == "+"){
        return <h1>{a + b}</h1>;
    }
    if (symbol == "-"){
        return <h2>{a - b}</h2>;
    }
    if (symbol == "*"){
        return <h3>{a * b}</h3>;
    }
    if (symbol == "/"){
        return <h4>{a / b}</h4>;
    }
}

function App() {
    return <Calc a={firstNumber} b={secendNumber} symbol={symbol}></Calc>;
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
