import React from "react";
import { useState } from "react";

function State() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }
  return (
    <>
      <h1>Button Clicked {count} times</h1>
      <button onClick={updateCount}>Click</button>
    </>
  );
}

export default State;
