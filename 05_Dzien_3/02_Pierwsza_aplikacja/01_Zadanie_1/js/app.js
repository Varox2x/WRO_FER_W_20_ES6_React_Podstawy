import React from "react";
import ReactDOM from "react-dom";


function Hello(){
    return <h1>Przywitanie z React</h1>
}

class HelloWorld extends React.Component{
    render() {
        return <h1>Siema Eniu</h1>
    }
}

ReactDOM.render(
    <React.StrictMode>
        <HelloWorld/>
    </React.StrictMode>,
    document.getElementById("app")
)