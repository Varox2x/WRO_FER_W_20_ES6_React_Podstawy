import React from "react";
import ReactDOM from "react-dom";
import person from "./data/person";

function showPerson({title, firstName, lastName, age}){
    return (
        <>
            <h1>{title}{firstName}{lastName}</h1>
            <span>{age}</span>
        </>
    )
}


function App(){
    return (showPerson(person))
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
