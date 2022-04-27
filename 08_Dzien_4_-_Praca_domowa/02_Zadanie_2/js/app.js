import React, {Component} from "react";
import ReactDOM from "react-dom";
import person from './data/person';



console.log(person);

function User(props){
    return (
        <>
            <h1>{props.name}{props.surname}</h1>
            <h3>{props.jobTitle}</h3>
            <p>{props.phone}</p>
        </>

    )
}

function App(){
    return <User name={person.name} surname={person.surname} jobTitle={person.jobTitle} phone={person.phone}/>
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
