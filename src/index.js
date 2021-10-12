import React from "react";
import ReactDOM from "react-dom";
import Today from "./Today.js";
import Header from "./Header.js";
import Inputs from "./Inputs.js";

function App() {
  return (
    <div className="App m-5">
      <Today />
      <Header text="TODO" />
      <Inputs placeholder="New Task" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
