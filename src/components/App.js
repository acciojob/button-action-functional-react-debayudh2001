import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [check, setCheck] = useState(false);
  function handleClick(){
    setCheck(true)
  }
  return (
    <div id="main">
      <button id="click" onClick={handleClick}>Click Me</button>
      {check && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
