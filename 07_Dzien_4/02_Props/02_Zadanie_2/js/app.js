import React, {Component} from "react";
import ReactDOM from "react-dom";

function AddNumbers(props){
    return <h1>{props.numberA + props.numberB}</h1>
}

ReactDOM.render(
  <AddNumbers numberA={3} numberB={5}/>,
  document.getElementById("app")
);
