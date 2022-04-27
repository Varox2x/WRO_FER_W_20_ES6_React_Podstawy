import React from "react";
import ReactDOM from "react-dom";
import animals from './data/animals';


function showAnimals(array){
    let str = array.join(" and ");
    return str
}


function App(){
    return <h1>{showAnimals(animals)}</h1>
}

ReactDOM.render(
  <App contentEditable={ true }/>,
  document.getElementById("app")
);
