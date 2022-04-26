import React from "react";
import ReactDOM from "react-dom";
import MyApp from "./App";

const App = () => (
  <div className="container">
    <MyApp />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


