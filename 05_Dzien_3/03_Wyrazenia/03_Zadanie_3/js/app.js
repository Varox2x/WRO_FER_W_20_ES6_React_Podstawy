import React from "react";
import ReactDOM from "react-dom";
import person from './data/person';

console.log(person);

function ShowUserInfo ({user: {title, firstName, lastName, age}, showAge}) {
    return (
        <ul>
            <li>{title}</li>
            <li>{firstName}</li>
            <li>{lastName}</li>
            <li>{showAge?age:"n/d"}</li>
        </ul>
    )
}




ReactDOM.render(
    <ShowUserInfo user={person} showAge={false}/>
,
    document.getElementById("app")
);
