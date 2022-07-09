import React from "react";
import ReactDOM from "react-dom";

const name = "Mridul";
var Num = Math.floor(Math.random() * 10) + 1;

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <p>Your lucky number is {Num}</p>
  </div>,
  document.getElementById("root")
);
