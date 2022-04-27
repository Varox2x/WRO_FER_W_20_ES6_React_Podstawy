import React, {Component} from "react";
import ReactDOM from "react-dom";

function LikeBox(){
    return (
        <div>
            <span>100 likes</span>
            <button>Lubie to!</button>
        </div>

    )
}


ReactDOM.render(
  <LikeBox/>,
  document.getElementById("app")
);
