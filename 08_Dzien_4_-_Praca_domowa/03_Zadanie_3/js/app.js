import React, {Component} from "react";
import ReactDOM from "react-dom";

import products from './data/products';

class ProductsList extends Component {
    render() {
        return (
            <ul>
                {products.map(({code, name, price},index) => <li key={index}>kod: {code} nazwa: {name} cena: {price}</li>)}
            </ul>
        )
    }
}

ReactDOM.render(
  <ProductsList/>,
  document.getElementById("app")
);
