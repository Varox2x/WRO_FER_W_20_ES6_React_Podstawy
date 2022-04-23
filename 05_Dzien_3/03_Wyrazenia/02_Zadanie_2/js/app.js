import React from "react";
import ReactDOM from "react-dom";

const userYearOfBirth = parseFloat(prompt("Podaj date"));

const currentDate = new Date().getFullYear();



ReactDOM.render(
  <h1>{currentDate - userYearOfBirth}</h1>,
  document.getElementById("app")
);
