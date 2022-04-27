import React from "react";
import ReactDOM from "react-dom";

function genNumber() {
  return Math.round(Math.random() * 9 + 1);
}
const firstNumber = genNumber();
const secendNumber = genNumber();

const userMess = parseFloat(prompt(`Jaki jest wynik dodawania ${firstNumber} + ${secendNumber}?`));


function isCorreect(info){
  if (info == (firstNumber + secendNumber)){
    return <div style={{backgroundColor: "green"}}>Dobrze</div>
  }
  if (info != (firstNumber + secendNumber)){
    return <div style={{backgroundColor: "red"}}>Zle</div>
  }
}

function App(){
  return isCorreect(userMess)
}



ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
