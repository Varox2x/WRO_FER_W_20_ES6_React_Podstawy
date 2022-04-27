import React, {Component} from "react";
import ReactDOM from "react-dom";

class SearchC extends Component{
    render() {
        return (
            <form>
                <input/>
                <button>Wyszukaj</button>
            </form>
        );
    }
}

function App(){
    return (
        <>
            <SearchC></SearchC>
            <SearchC></SearchC>
        </>

    )
}

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
