import React, {Component} from "react";
import ReactDOM from "react-dom";

const itemList = [
    {
        title: "Mysz komputerowa",
        image: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Red_computer_mouse.jpg"
    },
    {
        title: "Klawiatura",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Computer_keyboard_Danish_layout.svg/1000px-Computer_keyboard_Danish_layout.svg.png"
    },
    {
        title: "Laptop programisty",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Typing_computer_screen_reflection.jpg/640px-Typing_computer_screen_reflection.jpg"
    }
];

function ShopItemHeader({title, image}){
    return (
        <header>
            <h1>{title}</h1>
            <img width="350px" src={image}/>
        </header>
    )
}

function ShopList(array){
    return (
        <div className="shoplist">
            {array.map(({title, image}) => <ShopItemHeader title={title} image={image}/>)}
        </div>
    )
}

function App(){
    return ShopList(itemList)
}



ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
