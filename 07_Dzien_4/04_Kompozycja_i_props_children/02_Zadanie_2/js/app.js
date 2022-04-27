import React, {Component} from "react";
import ReactDOM from "react-dom";

const item = {
    title: "MacBook Pro",
    image: "https://bit.ly/2EEtduD",
    description: "Moc i mobilność – MacBook Pro wyraźnie podnosi tu poprzeczkę. Teraz możesz jeszcze szybciej realizować swoje pomysły. Pomogą Ci w tym wydajne procesory i układy pamięci, zaawansowana grafika, błyskawicznie działająca pamięć masowa i inne doskonałe rozwiązania.",
    price: 9999
};

function ShopItemHeader({title, image}){
    return (
        <header>
            <h1>{title}</h1>
            <img width="100px" src={image}/>
        </header>
    )
}
function ShopItemDescription({description}){
    return (
        <article>
            <p>{description}</p>
        </article>
    )
}
function ShopItemPricing({price}){
    return (
        <footer>
            Cena: {price} zł
            <button>Kup!</button>
        </footer>
    )
}
function ShopItem({data}){
    return (
        <>
            <ShopItemHeader title={data.title} image={data.image}/>
            <ShopItemDescription description={data.description}/>
            <ShopItemPricing price={data.price}/>
        </>
    )
}

//po usunieciu {} nie diala

function App(){
    return (
        <div>
            <ShopItem data={item}/>
            <ShopItem data={item}/>
        </div>
    )
}




ReactDOM.render(
  <App/>,
  document.getElementById("app")
);


console.log("AA");