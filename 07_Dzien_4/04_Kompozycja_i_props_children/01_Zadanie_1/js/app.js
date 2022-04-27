import React, {Component} from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <Wrapper>
            <Child/>
            <Child/>
        </Wrapper>
    );
};

const Wrapper = (props) => {
    return (
        <div className="wrapper">
            <h1>h1</h1>
            {props.children}
        </div>
    );
};

const Child = () => {
    return <p>child</p>;
};

ReactDOM.render(
  <App/>,
  document.getElementById("app")
);
