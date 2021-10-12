import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Today from "./Today.js";
import Header from "./Header.js";
import Inputs from "./Inputs.js";
import Notification from "./Notification.js";

function App() {
  return (
    <div>
      <div className="App">
        <Today />
        <Header text="TODO" />
        <Inputs placeholder="New Task" />
      </div>
      <Notification text="Notification" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
