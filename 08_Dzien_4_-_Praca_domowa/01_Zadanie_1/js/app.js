import React, {Component} from "react";
import ReactDOM from "react-dom";

function RandomNumbers(min, max, count){
    const array = [];
    let i =0;
    while(i < count){
        array.push(Math.floor(Math.random() * (max - min)) + min);
        i++;
    }
    return array;
}

function RandomNumbersInfo(){

}



function RandomNumbersList(){
    return (
        <div>
            {RandomNumbers(2,5,7).map((element) => <p>{element}</p>)}
        </div>
    )
}


function App(){
    return RandomNumbersList();
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
