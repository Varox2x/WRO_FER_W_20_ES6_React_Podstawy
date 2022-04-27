import React, {Component} from "react";
import ReactDOM from "react-dom";

const likes = 2432;


function LikeBox(props){
    return (
        <div>
            <span>{props.likesNumber}</span>
            <button>Lubie to!</button>
        </div>

    )
}


ReactDOM.render(
    <LikeBox likesNumber={likes}/>,
    document.getElementById("app")
);
