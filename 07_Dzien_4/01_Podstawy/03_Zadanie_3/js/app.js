import React, {Component} from "react";
import ReactDOM from "react-dom";

const navigationItems = [
    {
        url:"/",
        name:"Strona główna"
    },
    {
        url:"/blog",
        name:"Blog"
    },
    {
        url:"/cennik",
        name:"Cennik"
    },
    {
        url:"/kontakt",
        name:"Kontakt"
    }
];

function Menu(){
    return (
        <div>
            <ul>
                {navigationItems.map(({url,name},index)=>{
                    return (
                        <li key={index}><a href={url}>{name}</a></li>
                    )
                })}
            </ul>
        </div>
    )
}

ReactDOM.render(
  <Menu/>,
  document.getElementById("app")
);
