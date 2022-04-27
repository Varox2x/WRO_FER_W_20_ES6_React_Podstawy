import React, {Component} from "react";
import ReactDOM from "react-dom";

const numbers = [2,3,4,65,7];

function Sum(array){
    return (<h1>{array.bar.reduce(function (a, b) {
        return a + b;
    })}</h1>)
}


ReactDOM.render(
  <Sum bar={numbers}/>,
  document.getElementById("app")
);
