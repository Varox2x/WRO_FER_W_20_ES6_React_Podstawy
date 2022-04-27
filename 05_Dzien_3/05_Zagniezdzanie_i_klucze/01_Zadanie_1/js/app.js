import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";

function showPerson(array){
    const list = array.map(({id, title, name, surname, pesel, bio, avatar})=> {
        return <div key={id}> {title} {name} {surname} {pesel} {bio}</div>
    });
    return list
}


function App(){
    return <div>{showPerson(people)}</div>
}



ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
