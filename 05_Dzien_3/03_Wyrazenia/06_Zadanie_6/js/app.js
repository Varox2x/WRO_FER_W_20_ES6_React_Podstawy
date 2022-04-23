import React from "react";
import ReactDOM from "react-dom";
import animals from './data/animals';

function zwierzeta(array){
    let animalstring = array.join();
    return animalstring;
}

console.log(zwierzeta(animals));

ReactDOM.render(
  <h1>Hello, World!</h1>,
  document.getElementById("app")
);
