import React, {Component, useRef, useState} from "react";
import "./../styles/App.css";

function App() {
  const para = useRef(null);
  function handleClick(){
    para.current.innerText = "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>Click Me</button>
      <p id="para" ref={para}></p>
    </div>
  );
}


export default App;
