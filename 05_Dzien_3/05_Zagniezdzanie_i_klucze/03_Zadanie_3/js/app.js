import React from "react";
import ReactDOM from "react-dom";
import people from "./data/people";

function personListRender(array){
    const list = array.map(({id, title, name, surname, pesel, bio, avatar})=>{
        return      (<div className="person" key={id}>
                    <img src={avatar} alt={"da"}/>
                    <div className="info">
                    <h1>{title}{name}{surname}</h1>
                    <p>{bio}</p>
                    <p>{pesel}</p>
                    </div>
                    </div>)
    });
    return list
}

function App(){
    return (
        <>
            {personListRender(people)}
        </>
    )
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);

